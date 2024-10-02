import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { getPostsPaginated } from "./api/posts";
import { useInfiniteQuery } from "@tanstack/react-query";

const InfinitePosts = () => {
  const [page, setPage] = useState(1);

  const {
    status,
    error,
    data,
    isFetching,
    isFetchingNextPage,
    hasNextPage,
    fetchNextPage,
  } = useInfiniteQuery({
    queryKey: ["posts", "infinite"],
    getNextPageParam: () => page,
    queryFn: ({ pageParam = 1 }) => getPostsPaginated(pageParam),
  });

  if (status === "pending") return <h1>Loading...</h1>;
  if (status === "error") return <h1>{JSON.stringify(error)}</h1>;
  return (
    <div>
      <h1>Infinite Posts</h1>
      <div>
        {isFetching ? (
          <h2>"previous Data"</h2>
        ) : (
          <div>
            {data.pages
              .flatMap((data) => data)
              .map((post, key) => (
                <div key={post.id + "-" + key}>{post.title}</div>
              ))}
            l
          </div>
        )}
      </div>

      {hasNextPage && (
        <button
          onClick={() => {
            setPage((prev) => prev + 1);
            fetchNextPage();
          }}
        >
          {isFetchingNextPage ? "Loading" : "Load more"}
        </button>
      )}
    </div>
  );
};

export default InfinitePosts;
