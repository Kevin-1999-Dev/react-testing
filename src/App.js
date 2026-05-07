import "./App.css";
import { useState } from "react";

function App() {
  let [name, setName] = useState("Hello");

  let [posts, setPosts] = useState([
    {
      id: 1,
      title: "Post 1",
    },
    {
      id: 2,
      title: "Post 2",
    },
    {
      id: 3,
      title: "Post 3",
    },
  ]);

  let changeName = () => {
    setName((prevState) => (prevState = "Kaung"));
  };

  let deletePost = (id) => {
    setPosts((prevState)=> prevState.filter((post)=>post.id !== id))
  }

  return (
    <div className="App">
      <h1>{name}</h1>
      <button onClick={changeName}>Change Name</button>
      <hr />
      <h2>Posts</h2>
      <ul>
        {!!posts.length && posts.map((post) =>
          <li key={post.id}>
            {post.title}
            <button onClick={()=>deletePost(post.id)}>Delete</button>
          </li>)}
          {posts.length === 0 && <p>No posts available</p>}
      </ul>
    </div>
  );
}

export default App;
