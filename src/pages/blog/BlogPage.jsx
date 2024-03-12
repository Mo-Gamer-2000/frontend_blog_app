import React, { useEffect, useState } from "react";
import ArticleCard from "../../components/ArticleCard";
import { useQuery } from "@tanstack/react-query";
import { getAllPosts } from "../../services/index/posts";
import { toast } from "react-hot-toast";
import ArticleCardSkeleton from "../../components/ArticleCardSkeleton";
import ErrorMessage from "../../components/ErrorMessage";
import MainLayout from "../../components/MainLayout";
import Pagination from "../../components/Pagination";
import { useSearchParams } from "react-router-dom";

let isFirstRun = true;

const BlogPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const searchParamsValue = Object.fromEntries([...searchParams]);

  console.log(searchParamsValue);

  const [currentPage, setCurrentPage] = useState(
    parseInt(searchParams?.page) || 1
  );

  const { data, isLoading, isError, isFetching, refetch } = useQuery({
    queryFn: () => getAllPosts("", currentPage, 12),
    queryKey: ["posts"],
    onError: (error) => {
      toast.error("Couldn't fetch the posts data");
      console.error("Error fetching posts:", error);
    },
  });

  useEffect(() => {
    window.scroll(0, 0);
    if (isFirstRun) {
      isFirstRun = false;
      return;
    }
    refetch();
  }, [currentPage, refetch]);

  const handlePageChange = (page) => {
    setCurrentPage(page);

    // Change the Page's query string in the URL
    setSearchParams({ page });
  };

  return (
    <MainLayout>
      <section className="flex flex-col container mx-auto px-5 py-10">
        <div className="flex flex-wrap md:gap-x-5 gap-y-5 pb-10">
          {isLoading || isFetching ? (
            [...Array(3)].map((_, index) => (
              <ArticleCardSkeleton
                key={index}
                className="w-full md:w-[calc(50%-20px)] lg:w-[calc(33.33%-21px)]"
              />
            ))
          ) : isError ? (
            <ErrorMessage message="Couldn't fetch the posts data. Please try again later." />
          ) : (
            data?.data.map((post) => (
              <ArticleCard
                key={post._id}
                post={post}
                className="w-full md:w-[calc(50%-20px)] lg:w-[calc(33.33%-21px)]"
              />
            ))
          )}
        </div>
        {!isLoading && (
          <Pagination
            onPageChange={(page) => handlePageChange(page)}
            currentPage={currentPage}
            totalPageCount={JSON.parse(data?.headers?.["x-totalpagecount"])}
          />
        )}
      </section>
    </MainLayout>
  );
};

export default BlogPage;
