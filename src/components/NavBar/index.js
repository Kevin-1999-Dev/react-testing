import React from 'react'
import "./index.css";

export default function index({setModalOpen}) {

  return (
    <nav className="nav-wrapper">
      <div className="nav-container">
        <h1>Logo</h1>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li onClick={() => setModalOpen(true)}>Sign In</li>
        </ul>
      </div>
    </nav>
  )
}
