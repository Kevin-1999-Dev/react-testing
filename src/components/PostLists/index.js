import React from "react";
import "./index.css";

export default function index({ posts, setPosts }) {
  let deletePost = (id) => {
    setPosts((prevState) => prevState.filter((post) => post.id !== id));
  };
  return (
    <div className="post-list">
      {!!posts.length && posts.map((post) => (
        <div key={post.id} className="post-item">
          <h2>{post.title}</h2>
          <p>{post.description}</p>
          <div className="post-item-footer">
            <span className="post-delete-btn" onClick={() => deletePost(post.id)}>
              Delete
            </span>
          </div>
        </div>
      ))}
      {!posts.length && <h2 style={{ textAlign: "center" }}>No posts available</h2>}
    </div>
  );
}