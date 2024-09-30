import React from "react";
import "./index.css";
import { useQuery, useMutation } from "@tanstack/react-query";

const App = () => {
  const getTodos = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts").then(
      (response) => response.json(),
    );
    console.log(res);
    return res;
  };

  /* Queries : gettting data from api [GET]
    - automatic retries if fails
  */
  const posts = useQuery({ queryKey: ["todos"], queryFn: getTodos });

  // mutation : changing some time of data [POST]
  if (posts.isLoading) {
    return <div>loading....</div>;
  }

  if (posts.isError) {
    return <div>{JSON.stringify(posts.error)}</div>;
  }

  return (
    <div>
      {posts.data.map((post) => (
        <div key={post.id}>{post.title}</div>
      ))}
    </div>
  );
};

export default App;
