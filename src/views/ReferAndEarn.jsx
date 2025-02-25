import React, { useState } from "react";
import { referralModel } from "../models/referralModel";
import ReferralController from "../controllers/ReferralController";
import "../components/ReferAndEarn.css";
import "../components/Navbar.css"


const ReferAndEarn = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState(referralModel);
  const [errors, setErrors] = useState({});

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = ReferralController.validateForm(formData);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    await ReferralController.submitData(formData);
    setIsModalOpen(false);
  };





  return (
    <div className="refer-container">
      {/* Navbar */}
      <nav className="navbar">
        <div className="navbar-left">
          <span className="navbar-text">Brand</span>
        </div>

        {/* Desktop Links (Hidden on Mobile) */}
        <div className="navbar-right">
          <a href="/about" className="navbar-link">About</a>
          <a href="/services" className="navbar-link">Services</a>
          <a href="/contact" className="navbar-link">Contact</a>
          <a href="/login" className="navbar-link">Login</a>
          <a href="/signup" className="navbar-link">Sign Up</a>
        </div>

        {/* Mobile Navbar (Visible on screen width <= 1120px) */}
        <div className="mobile-menu">
          <button className="explore-button">
            Explore <span className="arrow">›</span>
          </button>
          <button className="menu-icon" onClick={() => setIsDropdownOpen(!isDropdownOpen)}>☰</button>
        </div>
      </nav>

      {/* Dropdown Menu (Shows when menu is clicked) */}
      {isDropdownOpen && (
        <div className="dropdown-menu">
          <a href="/about" className="dropdown-link">About</a>
          <a href="/services" className="dropdown-link">Services</a>
          <a href="/contact" className="dropdown-link">Contact</a>
          <a href="/login" className="dropdown-link">Login</a>
          <a href="/signup" className="dropdown-link">Sign Up</a>
        </div>
      )}
      <div className="refer-content">
        <h1>Refer & Earn</h1>
        <p>Invite your friends and earn rewards!</p>
        <button className="refer-button" onClick={toggleModal}>
          Refer Now
        </button>
      </div>

      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="close-button" onClick={toggleModal} >✕</button>
            <h2>Refer a Friend</h2>
            <form onSubmit={handleSubmit}>
              {[
                { label: "Your Name", name: "referrerName", type: "text" },
                { label: "Your Email", name: "referrerEmail", type: "email" },
                { label: "Friend's Name", name: "refereeName", type: "text" },
                { label: "Friend's Email", name: "refereeEmail", type: "email" },
                { label: "Course Name", name: "courseName", type: "text" },
              ].map(({ label, name, type }) => (
                <div key={name}>
                  <input type={type} name={name} placeholder={label} value={formData[name]} onChange={handleChange} />
                  {errors[name] && <p className="error-text">{errors[name]}</p>}
                </div>
              ))}

              <button type="submit" className="submit-button">Send Referral</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ReferAndEarn;
