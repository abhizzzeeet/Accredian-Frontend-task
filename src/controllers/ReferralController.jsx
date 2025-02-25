import axios from "axios";

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

class ReferralController {

  async validateForm (formData)  {
    let errors = {};
    if (!formData.referrerName) errors.referrerName = "Referrer name is required";
    if (!formData.referrerEmail) errors.referrerEmail = "Referrer email is required";
    if (!formData.refereeName) errors.refereeName = "Referee name is required";
    if (!formData.refereeEmail) errors.refereeEmail = "Referee email is required";
    return errors;
  };
  
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