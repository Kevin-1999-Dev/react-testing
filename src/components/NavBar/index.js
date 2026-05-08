import React from 'react'
import "./index.css";

export default function index({setModalOpen}) {

  return (
    <nav className="nav-wrapper">
      <div className="nav-container">
        <h1>Logo</h1>
        <ul>
          <li>Home</li>
          <li onClick={() => setModalOpen(true)}>Post Create</li>
        </ul>
      </div>
    </nav>
  )
}
