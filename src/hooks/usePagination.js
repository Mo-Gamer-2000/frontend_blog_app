import { useMemo } from "react";

export const usePagination = ({
  totalCount,
  pageSize,
  siblingCount = 1,
  currentPage,
  totalPageCount,
}) => {
  const paginationRange = useMemo(() => {
    // Our Core Logic Goes Here
    const totalPageNumbers = siblingCount + 5;

    // State 1: If the number of pages are less then page numbers
    if (totalPageNumbers >= totalPageCount) {
      return range(1, totalPageCount);
    }
  }, [totalCount, pageSize, siblingCount, currentPage, totalPageCount]);

  return paginationRange;
};

function range(start, end) {
  const length = end - start + 1;

  return Array.from({ length }, (value, index) => index + start);
}
