import React from 'react'
import '../styles/Navbar.css'

export default function Navbar() {
    
  return (
    <nav className="navbar-container">
      <div className="navbar-links">
        <a href="#home" className="nav-link active">HOME</a>
        <a href="#about" className="nav-link">ABOUT</a>
        <a href="#classes" className="nav-link">OUR CLASSES</a>
      </div>
      
      <div className="navbar-logo-name">
        {/* Aquí iría el logo si lo incluyeras */}
        <span className="logo-text">FITCLUB</span>
      </div>

      <div className="navbar-right">
        <a href="#blog" className="nav-link">BLOG</a>
        <a href="#contact" className="nav-link">CONTACT</a>
        <button className="join-button">JOIN NOW</button>
      </div>
    </nav>
  )
}   