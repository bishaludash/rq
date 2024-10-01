import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getPosts } from "./api/posts";

const PostList1 = () => {
  // useQuery with specific staletime
  const postQuery = useQuery({
    queryKey: ["posts"],
    queryFn: getPosts,
    // refetchInterval: 1000 * 10,
  });

  if (postQuery.isLoading) return <h1>Loading...</h1>;
  if (postQuery.isError) return <h1>{JSON.stringify(postQuery.error)}</h1>;

  return (
    <div>
      <h1>PostList1</h1>
      {postQuery.data.map((post, key) => (
        <div key={key}>{post.title}</div>
      ))}
    </div>
  );
};

export default PostList1;
