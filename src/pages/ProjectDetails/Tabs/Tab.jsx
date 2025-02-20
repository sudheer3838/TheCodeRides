import React, { useState } from "react";

import "../Tabs/Tab.css"; 

const Tabs = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  return (
    <div className="tabs-container">
      {/* Tabs Navigation */}
      <ul className="nav nav-tabs" role="tablist">
        {tabs.map((tab) => (
          <li key={tab.id} className="nav-item">
            <button
              className={`nav-link ${activeTab === tab.id ? "active" : ""}`}
              onClick={() => setActiveTab(tab.id)}
              role="tab"
              aria-selected={activeTab === tab.id}
            >
              {tab.label}
            </button>
          </li>
        ))}
      </ul>

      {/* Tabs Content (With Smooth Animation) */}
      <div className="tab-content">
        {tabs.map((tab) => (
          <div
            key={tab.id}
            className={`tab-pane ${activeTab === tab.id ? "fade-in" : "fade-out"}`}
          >
            {activeTab === tab.id && <p>{tab.content}</p>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tabs;
