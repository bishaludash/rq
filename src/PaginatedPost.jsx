import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { getPostsPaginated } from "./api/posts";

const PaginatedPost = () => {
  const [page, setPage] = useState(1);
  const { status, error, data, isFetching } = useQuery({
    queryKey: ["posts", { page }],
    placeholderData: keepPreviousData,
    queryFn: () => getPostsPaginated(page),
  });

  // console.log(isPlaceholderData);

  if (status === "pending") return <h1>Loading...</h1>;
  if (status === "error") return <h1>{JSON.stringify(error)}</h1>;
  return (
    <div>
      <h1>Paginated Post</h1>
      <div>
        {isFetching ? (
          <h2>"previous Data"</h2>
        ) : (
          <div>
            {data.map((post) => (
              <div key={post.id}>{post.title}</div>
            ))}
          </div>
        )}
      </div>

      <div>
        <button onClick={() => setPage((prev) => prev - 1)}>Previous</button>
        <button onClick={() => setPage((prev) => prev + 1)}>Next</button>
      </div>
    </div>
  );
};

export default PaginatedPost;
