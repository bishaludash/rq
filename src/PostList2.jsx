import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getPosts } from "./api/posts";

const PostList2 = () => {
  const postQuery = useQuery({
    queryKey: ["posts2"],
    queryFn: getPosts,
  });

  if (postQuery.isLoading) return <h1>Loading...</h1>;
  if (postQuery.isError) return <h1>{JSON.stringify(postQuery.error)}</h1>;

  return (
    <div>
      <h1>PostList2</h1>
      {postQuery.data.map((post, key) => (
        <div key={key}>{post.title}</div>
      ))}
    </div>
  );
};

export default PostList2;
