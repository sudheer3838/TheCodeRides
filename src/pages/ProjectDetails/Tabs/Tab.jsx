import React, { useEffect, useRef, useState } from "react";

import "../Tabs/Tab.css";
import { Link } from "react-router-dom";

const Tabs = ({ ProjectDetails }) => {
  const [data, setData] = useState([null])
  useEffect(() => {
    loadData()
  }, [])
  const loadData = () => {
    setData(ProjectDetails?.details)
  }

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
        <div style={{ minHeight: "160px" }} ref={tabRefs.overview} id="overview" className="tab-pane fade-in">
          <h3>Overview</h3>
          <p>{data?.overview ?? 'Coming Soon!'}</p>
        </div>

        <div style={{ minHeight: "160px" }} ref={tabRefs.role} id="role" className="tab-pane fade-in">
          <h3>Role & Responsibility</h3>
          <p>{data?.roleAndResponsibility ?? 'Coming Soon!'}</p>
        </div>

        <div style={{ minHeight: "160px" }} ref={tabRefs.caseStudy} id="caseStudy" className="tab-pane fade-in">
          <h3>Case Study</h3>
          <p>{data?.caseStudy ?? 'Coming Soon!'}</p>
        </div>

        <div style={{ minHeight: "160px" }} ref={tabRefs.challenge} id="challenge" className="tab-pane fade-in">
          <h3>Challenge</h3>
          <p>{data?.challenge ?? 'Coming Soon!'}</p>
        </div>

        <div style={{ minHeight: "160px" }} ref={tabRefs.result} id="result" className="tab-pane fade-in">
          <h3>Result & Achievement</h3>
          <p>{data?.resultAndAchievements ?? 'Coming Soon!'}</p>
        </div>

        <div className="tech-tags" aria-label="Technology used">
        <hr />
          <h3 className="px-1 py-2">Technology Stack Used:</h3>
          <hr />
          <ul role="list" className="tag-wrap">
            <li><span className="tag">React.js</span></li>
            <li><span className="tag">Firebase</span></li>
            <li><span className="tag">WCAG 2.1</span></li>
            <li><span className="tag">SCSS</span></li>
            <li><span className="tag">Custom APIs</span></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Tabs;
