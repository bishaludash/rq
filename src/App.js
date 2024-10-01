import React from "react";
import "./index.css";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

const testData = {
  userId: 1,
  title: "Bishal test",
  body: "Bishal test123",
};

const App = () => {
  const queryClient = useQueryClient();

  const getposts = async (queryKey) => {
    console.log(queryKey);
    const res = await fetch("https://jsonplaceholder.typicode.com/posts").then(
      (response) => response.json(),
    );
    // console.log(res);
    return res;
  };

  const newPostMutation = useMutation({
    mutationFn: async (data) => {
      return await axios.post(
        "https://jsonplaceholder.typicode.com/posts",
        data,
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["posts"]);
    },
  });

  /* Queries : gettting data from api [GET]
    - automatic retries if fails
  */

  /* query Keys style idea
    posts -> ["posts"]
    posts/1 -> ["posts", post.id]
    posts?authorId=1 -> ["posts", {authoId :1}]
    posts -> ["posts", post.id, "comments"]
  */
  const posts = useQuery({
    queryKey: ["posts"],
    queryFn: (queryKey) => getposts(queryKey),
  });

  // mutation : changing some time of data [POST]
  if (posts.isLoading) {
    return <div>loading....</div>;
  }

  if (posts.isError) {
    return <div>{JSON.stringify(posts.error)}</div>;
  }

  return (
    <div>
      <button onClick={() => newPostMutation.mutate(testData)}>Add post</button>
      {posts.data.map((post) => (
        <div key={post.id}>{post.title}</div>
      ))}
    </div>
  );
};

export default App;
