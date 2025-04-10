import React, { useEffect, useRef, useState } from "react";

import "../Tabs/Tab.css";
import { Link } from "react-router-dom";

const Tabs = ({ ProjectDetails }) => {

  const websiteURL = ProjectDetails?.companyUrl ?? 'URL not Fount!';
  const apiKey = '70cd36'; //
  const thumbnail = `https://api.screenshotmachine.com?key=${apiKey}&url=${encodeURIComponent(websiteURL)}&dimension=800x600`;
  const handleImageError = () => {
    console.error("Image failed to load.");
  };
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
          <div className="row">
            <div className="col-md-6">
              <p>{data?.overview ?? 'Coming Soon!'}</p>
            </div>
            <div className="col-md-6">
              <img
                src={thumbnail}
                alt="Website Screenshot"
                onError={handleImageError}
                style={{
                  width: "100%",
                  border: "1px solid #ccc",
                  borderRadius: "8px",
                }}
              />
            </div>
          </div>
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
        {ProjectDetails.technologyInDevelopmentTags && (
          <div className="tech-tags" aria-label="Technology used">
            <hr />
            <h3 className="px-1 py-2">Technology Stack Used:</h3>
            <hr />

            <ul role="list" className="tag-wrap">
              {ProjectDetails.technologyInDevelopmentTags.map(tag => (
                <li key={tag}><span className="tag">{tag}</span></li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Tabs;
