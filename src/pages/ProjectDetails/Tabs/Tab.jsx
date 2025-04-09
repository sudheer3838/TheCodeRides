import React, { useRef } from "react";

import "../Tabs/Tab.css";
import { Link } from "react-router-dom";

const Tabs = ({ tabs }) => {
  const tabRefs = {
    overview: useRef(null),
    role: useRef(null),
    caseStudy: useRef(null),
    challenge: useRef(null),
    result: useRef(null),
  };
  const handleScrollToTab = (tabKey) => (e) => {
    e.preventDefault();
    tabRefs[tabKey]?.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="tabs-container">
      <ul className="nav nav-tabs" role="tablist">
        <li className="nav-item">
          <Link href="#overview" className="nav-link" onClick={handleScrollToTab("overview")}>Overview</Link>
        </li>
        <li className="nav-item">
          <Link href="#role" className="nav-link" onClick={handleScrollToTab("role")}>Role & Responsibility</Link>

        </li>
        <li className="nav-item">
          <Link href="#caseStudy" className="nav-link" onClick={handleScrollToTab("caseStudy")}>Case Study</Link>
        </li>
        <li className="nav-item">
          <Link href="#challenge" className="nav-link" onClick={handleScrollToTab("challenge")}>Challenge</Link>
        </li>
        <li className="nav-item">
          <Link href="#result" className="nav-link" onClick={handleScrollToTab("result")}>Result & Achievement</Link>
        </li>
      </ul>
      <div className="tab-content">
        <div style={{ minHeight: "320px" }} ref={tabRefs.overview} id="overview" className="tab-pane fade-in">
          <h3>Overview</h3>
          <p>Overview content goes here...</p>
        </div>

        <div style={{ minHeight: "320px" }} ref={tabRefs.role} id="role" className="tab-pane fade-in">
          <h3>Role & Responsibility</h3>
          <p>Role content goes here...</p>
        </div>

        <div style={{ minHeight: "320px" }} ref={tabRefs.caseStudy} id="caseStudy" className="tab-pane fade-in">
          <h3>Case Study</h3>
          <p>Case Study content goes here...</p>
        </div>

        <div style={{ minHeight: "320px" }} ref={tabRefs.challenge} id="challenge" className="tab-pane fade-in">
          <h3>Challenge</h3>
          <p>Challenge content goes here...</p>
        </div>

        <div style={{ minHeight: "320px" }} ref={tabRefs.result} id="result" className="tab-pane fade-in">
          <h3>Result & Achievement</h3>
          <p>Results content goes here...</p>
        </div>
      </div>
    </div>
  );
};

export default Tabs;
