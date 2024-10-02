import React, { useState } from "react";
import "./index.css";
import PostList1 from "./PostList1";
import PostList2 from "./PostList2";
import Post from "./Post";
import CreatePost from "./CreatePost";
import PaginatedPost from "./PaginatedPost";
import InfinitePosts from "./InfinitePosts";

const App = () => {
  const [postTab, setPostTab] = useState(1);

  return (
    <div>
      <div>
        <button onClick={() => setPostTab(1)}>Post List 1</button>
        <button onClick={() => setPostTab(2)}>Post List 2</button>
        <button onClick={() => setPostTab(3)}>First Post</button>
        <button onClick={() => setPostTab(4)}>Create Post</button>
        <button onClick={() => setPostTab(5)}>Paginated posts</button>
        <button onClick={() => setPostTab(6)}>Infinite posts</button>
      </div>

      {postTab === 1 && <PostList1 />}
      {postTab === 2 && <PostList2 />}
      {postTab === 3 && <Post id={1} />}
      {postTab === 4 && <CreatePost />}
      {postTab === 5 && <PaginatedPost />}
      {postTab === 6 && <InfinitePosts />}
    </div>
  );
};

export default App;
