import { useMemo } from "react";

export const DOTS = "...";
const LEFT_PAGE = 1;
const RIGHT_PAGE = 2;

export const usePagination = ({
  siblingCount = 1,
  currentPage,
  totalPageCount,
}) => {
  const paginationRange = useMemo(() => {
    const totalPageNumbers = siblingCount + 5; // Total number of page numbers to show on the pagination bar

    // If the total number of pages is less than or equal to the total number of page numbers to be displayed
    if (totalPageNumbers >= totalPageCount) {
      return range(1, totalPageCount);
    }

    // Calculate the index for the left and right siblings
    const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
    const rightSiblingIndex = Math.min(
      currentPage + siblingCount,
      totalPageCount
    );

    // Determine whether to show dots for left and right siblings
    // Dots are not shown when there is only one page number to be inserted between the sibling and the page limit
    const shouldShowLeftDots = leftSiblingIndex > LEFT_PAGE;
    const shouldShowRightDots = rightSiblingIndex < totalPageCount - RIGHT_PAGE;

    // Pages at the beginning and end of the range
    const firstPageIndex = 1;
    const lastPageIndex = totalPageCount;

    // Condition: No left dots to show, but right dots to be visible
    if (!shouldShowLeftDots && shouldShowRightDots) {
      const leftItemCount = LEFT_PAGE + RIGHT_PAGE + 2 * siblingCount;
      const leftRange = range(1, leftItemCount);
      return [...leftRange, DOTS, totalPageCount];
    }

    // Condition: No right dots to show, but left dots to be shown
    if (shouldShowLeftDots && !shouldShowRightDots) {
      const rightItemCount = LEFT_PAGE + RIGHT_PAGE + 2 * siblingCount;
      const rightRange = range(
        totalPageCount - rightItemCount + 1,
        totalPageCount
      );
      return [firstPageIndex, DOTS, ...rightRange];
    }

    // Condition: Both left and right dots to be shown
    if (shouldShowLeftDots && shouldShowRightDots) {
      const middleRange = range(leftSiblingIndex, rightSiblingIndex);
      return [firstPageIndex, DOTS, ...middleRange, DOTS, lastPageIndex];
    }
  }, [siblingCount, currentPage, totalPageCount]);

  return paginationRange;
};

// Generates an array of integers from the start index to the end index
function range(start, end) {
  const length = end - start + 1;
  return Array.from({ length }, (_, index) => index + start);
}
