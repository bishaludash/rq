import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getPost } from "./api/posts";
import { getUser } from "./api/users";

const Post = ({ id }) => {
  const postQuery = useQuery({
    queryKey: ["posts", id],
    queryFn: () => getPost(id),
  });

  const userQuery = useQuery({
    queryKey: ["users", postQuery?.data?.userId],
    enabled: postQuery?.data?.userId !== null,
    queryFn: () => getUser(postQuery.data.userId),
  });

  if (postQuery.isLoading) return <h1>Loading...</h1>;
  if (postQuery.isError) return <h1>{JSON.stringify(postQuery.error)}</h1>;

  return (
    <div>
      <h4>{postQuery.data.title}</h4>
      <div>Author : {postQuery.data.userId}</div>
      <div>
        Author : {userQuery.isLoading ? "Loading user" : userQuery.data.name}
      </div>
      <div>{postQuery.data.body}</div>
    </div>
  );
};

export default Post;
