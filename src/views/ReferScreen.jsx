// ReferScreen.jsx
import React, { useState } from "react";
import { referralModel } from "../models/referralModel";
import ReferralController from "../controllers/ReferralController";
import "../components/css/ReferScreen.css";
import "../components/css/Cards.css";
import "../components/css/PopUp.css";

import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import DescriptionIcon from '@mui/icons-material/Description';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';

const ReferScreen = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [formData, setFormData] = useState(referralModel);
    const [errors, setErrors] = useState({});   

    const toggleModal = () => {
        if (!isModalOpen) {
            setFormData(referralModel); // Reset form fields
            setErrors({}); // Clear errors
        }
        setIsModalOpen(!isModalOpen);
    }
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const validationErrors = await ReferralController.validateForm(formData);

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        ReferralController.submitData(formData);
        alert("Refer saved and sending email");
        setIsModalOpen(false);
    };

    return (
        <div className="refer-content">
            <div className="content-wrapper">
                {/* Left Section */}
                <div className="left-section">
                    <div className="text-container">
                        <h1>Let’s Learn & Earn</h1>
                        <h2>Get a chance to win up-to <span className="highlighted-amount">Rs. 15,000</span></h2>
                    </div>
                    <button className="refer-button" onClick={toggleModal}>
                        Refer Now
                    </button>
                </div>

                {/* Right Section - Image */}
                <div className="right-section">
                    <img src="/assets/Anniversary.png" alt="Anniversary" className="anniversary-image" />
                </div>
            </div>
            <div className="cards">
                <h1 className="heading">How Do I Refer</h1>

                {/* Cards Container */}
                <div className="card-container">
                    {/* Card 1 */}
                    <div className="card">
                        <PersonAddAlt1Icon className="card-icon" />
                        <p>Share your referral link with friends.</p>
                    </div>

                    {/* Card 2 */}
                    <div className="card">
                        <DescriptionIcon className="card-icon" />
                        <p>Your friend signs up and enrolls.</p>
                    </div>

                    {/* Card 3 */}
                    <div className="card">
                        <AccountBalanceWalletIcon className="card-icon" />
                        <p>Earn rewards for successful referrals!</p>
                    </div>
                </div>

                <button className="refer-button" onClick={toggleModal}>
                    Refer Now
                </button>
            </div>

            <h1>Refer & Earn</h1>
            <p>Invite your friends and earn rewards!</p>
            <button className="refer-button" onClick={toggleModal}>
                Refer Now
            </button>

            {isModalOpen && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <button className="close-button" onClick={toggleModal}>✕</button>
                        <h2>Refer a Friend</h2>
                        <form onSubmit={handleSubmit}>
                            {[
                                { label: "Your Name", name: "referrerName", type: "text" },
                                { label: "Your Email", name: "referrerEmail", type: "email" },
                                { label: "Friend's Name", name: "refereeName", type: "text" },
                                { label: "Friend's Email", name: "refereeEmail", type: "email" },
                                { label: "Course Name", name: "courseName", type: "text" },
                            ].map(({ label, name, type }) => (
                                <div key={name} className="input-container">
                                    {errors[name] && <p className="error-text">{errors[name]}</p>}
                                    <input
                                        type={type}
                                        name={name}
                                        placeholder={label}
                                        value={formData[name]}
                                        onChange={handleChange}
                                        className={errors[name] ? "input-error" : "input-valid"}
                                    />
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

export default ReferScreen;
