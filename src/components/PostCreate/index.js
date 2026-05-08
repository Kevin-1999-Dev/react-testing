import React from "react";
import "./index.css";

export default function index({ setModalOpen }) {
  return (
    <form className="post-create-form">
      <div className="form-group">
        <label htmlFor="title">Title</label>
        <input type="text" id="title" name="title" />
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