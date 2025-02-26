// Tabs.jsx
import React, { useState } from "react";
import ReferScreen from "../views/ReferScreen";
import "../components/css/Tabs.css"

const BenefitsScreen = () => <div className="content">Benefits Page Content</div>;
const FAQsScreen = () => <div className="content">FAQs Page Content</div>;
const SupportScreen = () => <div className="content">Support Page Content</div>;

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("Refer");

  return (
    <div>
      {/* Tabs Navigation */}
      <div className="tabs">
        {["Refer", "Benefits", "FAQs", "Support"].map((tab) => (
          <button
            key={tab}
            className={`tab-button ${activeTab === tab ? "active" : ""}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="tab-content">
        {activeTab === "Refer" && <ReferScreen />}
        {activeTab === "Benefits" 
        // && <BenefitsScreen />
        }
        {activeTab === "FAQs" 
        // && <FAQsScreen />
        }
        {activeTab === "Support" 
        // && <SupportScreen />
        }
      </div>
    </div>
  );
};

export default Tabs;
