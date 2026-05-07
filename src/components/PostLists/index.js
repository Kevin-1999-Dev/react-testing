import React from "react";
import "./index.css";

export default function index({posts}) {
  console.log(posts);
  return (
    <div className="post-list">
      {posts.map((post) => (
        <div key={post.id} className="post-item">
          {post.title}
        </div>
      ))}
    </div>
  );
}
