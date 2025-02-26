// ReferAndEarn.jsx
import React, { useState } from "react";
import Tabs from "../components/Tabs";  // Import Tabs Component
import "../components/ReferAndEarn.css";
import "../components/Navbar.css";

const ReferAndEarn = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div className="refer-container">
      {/* Navbar */}
      <nav className="navbar">
        <div className="navbar-left">
          <span className="navbar-text">Brand</span>
        </div>

        {/* Desktop Links */}
        <div className="navbar-right">
          <a href="/about" className="navbar-link">About</a>
          <a href="/services" className="navbar-link">Services</a>
          <a href="/contact" className="navbar-link">Contact</a>
          <a href="/login" className="navbar-link">Login</a>
          <a href="/signup" className="navbar-link">Sign Up</a>
        </div>

        {/* Mobile Navbar */}
        <div className="mobile-menu">
          <button className="explore-button">
            Explore <span className="arrow">›</span>
          </button>
          <button className="menu-icon" onClick={() => setIsDropdownOpen(!isDropdownOpen)}>☰</button>
        </div>
      </nav>

      {/* Dropdown Menu */}
      {isDropdownOpen && (
        <div className="dropdown-menu">
          <a href="/about" className="dropdown-link">About</a>
          <a href="/services" className="dropdown-link">Services</a>
          <a href="/contact" className="dropdown-link">Contact</a>
          <a href="/login" className="dropdown-link">Login</a>
          <a href="/signup" className="dropdown-link">Sign Up</a>
        </div>
      )}

      {/* Tabs Section */}
      <Tabs />
    </div>
  );
};

export default ReferAndEarn;
