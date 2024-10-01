import React, { useState } from "react";
import "./index.css";
import PostList1 from "./PostList1";
import PostList2 from "./PostList2";
import Post from "./Post";

const App = () => {
  const [postTab, setPostTab] = useState(1);

  return (
    <div>
      <div>
        <button onClick={() => setPostTab(1)}>Post List 1</button>
        <button onClick={() => setPostTab(2)}>Post List 2</button>
        <button onClick={() => setPostTab(3)}>First Post</button>
      </div>

      {postTab === 1 && <PostList1 />}
      {postTab === 2 && <PostList2 />}
      {postTab === 3 && <Post id={1} />}
    </div>
  );
};

export default App;
