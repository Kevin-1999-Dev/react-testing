import React from 'react'
import "./index.css";
import ReactDom from 'react-dom';
import PostCreate from '../PostCreate';

export default function index({setModalOpen, setPosts, posts}) {
  return (
    ReactDom.createPortal(<div className="modal-wrapper">
      <div className="modal-backdrop">
          <div className="modal-content">
            <PostCreate setModalOpen={setModalOpen} setPosts={setPosts} posts={posts} />
          </div>
        </div>
    </div>, document.getElementById('portal-root'))
  )
}
