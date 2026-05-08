import React from 'react'
import "./index.css";
import ReactDom from 'react-dom';

export default function index({setModalOpen}) {
  return (
    ReactDom.createPortal(<div className="modal-wrapper">
      <div className="modal-backdrop">
          <div className="modal-content">
            <h2>Modal Title</h2>
            <p>Modal content goes here.</p>
            <button onClick={() => setModalOpen(false)}>Close</button>
          </div>
        </div>
    </div>, document.getElementById('portal-root'))
  )
}
