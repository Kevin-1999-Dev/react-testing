import "./App.css";
import { useState } from "react";
import NavBar from "./components/NavBar/index.js";
import PostLists from "./components/PostLists/index.js";

function App() {

  let [posts, setPosts] = useState([
    {
      id: 1,
      title: "Post 1",
      description: "This is the description for Post 1",
    },
    {
      id: 2,
      title: "Post 2",
      description: "This is the description for Post 2",
    },
    {
      id: 3,
      title: "Post 3",
      description: "This is the description for Post 3",
    },
  ]);

  return (
    <div className="App">
      <NavBar />
      <PostLists posts={posts} />
    </div>
  );
}

export default App;
