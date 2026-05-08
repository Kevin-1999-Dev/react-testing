/* eslint-disable react-hooks/rules-of-hooks */

import React from "react";
import { useState } from "react";
import "./index.css";

export default function index({ setModalOpen, setPosts, posts }) {
  let [title, setTitle] = useState("");
  let [description, setDescription] = useState("");

  let titleValue = (e) => {
    setTitle(e.target.value);
  };

  let descriptionValue = (e) => {
    setDescription(e.target.value);
  };

  let submitForm = (e) => {
    e.preventDefault();
    setModalOpen(false);
    setPosts(
     (prevState =>  [...posts,
        {
          id: Math.floor(Math.random() * 1000),
          title: title,
          description: description,
        }])
    );
  }

  return (
    <form className="post-create-form" onSubmit={submitForm}>
      <div className="form-group">
        <label htmlFor="title">Title</label>
        <input type="text" id="title" name="title" value={title} onChange={titleValue} />
      </div>
      <div className="form-group">
        <label htmlFor="description">Description</label>
        <textarea id="description" name="description" value={description} onChange={descriptionValue} />
      </div>
      <div className="button-group">
        <button type="submit" className="submitBtn">
          Create Post
        </button>
        <button
          type="button"
          className="closeBtn"
          onClick={() => setModalOpen(false)}
        >
          Close
        </button>
      </div>
    </form>
  );
}