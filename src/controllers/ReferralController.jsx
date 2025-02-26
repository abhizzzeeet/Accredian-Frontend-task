import axios from "axios";

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

class ReferralController {

  async validateForm(formData) {
    let errors = {};

    console.log("formData received:", formData);

    if (!formData.referrerName || !formData.referrerName.trim()) {
        errors.referrerName = "Your Name is required.";
    }
    if (!formData.referrerEmail || !formData.referrerEmail.trim()) {
        errors.referrerEmail = "Your Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.referrerEmail)) {
        errors.referrerEmail = "Enter a valid email.";
    }
    if (!formData.refereeName || !formData.refereeName.trim()) {
        errors.refereeName = "Friend's Name is required.";
    }
    if (!formData.refereeEmail || !formData.refereeEmail.trim()) {
        errors.refereeEmail = "Friend's Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.refereeEmail)) {
        errors.refereeEmail = "Enter a valid email.";
    }
    if (!formData.courseName || !formData.courseName.trim()) {
        errors.courseName = "Course Name is required.";
    }

    return errors;
}
  
  async submitData(formData) {
    try {
      console.log("formData", formData);
      console.log("API_BASE_URL", API_BASE_URL);
      const response = await axios.post(`${API_BASE_URL}/api/referrals`, formData, {
        headers: {
          "Content-Type": "application/json",
        }
      });
      console.log("API Response:", response.data);
    } catch (error) {
      console.error("Error submitting referral:", error);
      throw error;
    }
  }
}
export default new ReferralController();