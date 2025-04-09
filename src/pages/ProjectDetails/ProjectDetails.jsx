import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import './ProjectDetails.css'
import FeaturedProject from '../../components/FeaturedProjects/FeaturedProject';
import Tabs from './Tabs/Tab';
function ProjectDetails() {
  // const {id} = useParams();
  const location = useLocation();
  const { project } = location.state || {};
  const navigate = useNavigate(); // Hook for navigation
  const websiteURL = project.companyUrl;
  const apiKey = '70cd36'; // 🔁 Replace this with your actual ScreenshotMachine API key
  const thumbnail = `https://api.screenshotmachine.com?key=${apiKey}&url=${encodeURIComponent(
    websiteURL
  )}&dimension=800x600`;

  const handleImageError = () => {
    console.error("Image failed to load.");
  };
  // console.log(project);

  const handleBack = () => {
    sessionStorage.setItem("scrollPosition", window.scrollY);
    navigate(-1);
  };
  return (
    <>
      <section className='banner-section' role="region" aria-labelledby="company-title">
      <svg class="yellow-border" preserveAspectRatio="none" viewBox="0 0 100 100" role="none">
            <polygon points="100,100 100,0 0,100" opacity="0.85" fill="#2d59cf"></polygon>
        </svg>
        <button
          className="backBtn btn btn-outline-secondary"
          onClick={() => navigate(-1)}
          aria-label="Go back to the previous page"
        >
          ← Back to project
        </button>
        <div className="projectDetailView">
          <iframe className='live-project-iframe' src={project.companyUrl}></iframe>
          {/* <img
            src={thumbnail}
            alt="Website Screenshot"
            onError={handleImageError}
            style={{
              width: "100%",
              border: "1px solid #ccc",
              borderRadius: "8px",
            }}
          /> */}
          <div className="box">
            <div className="d-flex">
              <p className="inline-flex badge bg-warning mb-3 py-2 px-3 fs-14 badge-category">{project.categoryLabel}</p>
              <p className="inline-flex badge bg-success mb-3 py-2 px-3 fs-14 mx-2">{project.label}</p>
            </div>
            <div className="img-thumbnail mb-3 mt-2">
              <a href={project.companyUrl} target="_blank" rel="noopener noreferrer">
                <img
                  src={project.companyLogo}
                  alt={`${project.companyTitle} Logo`}
                  className=""
                  style={{ maxWidth: "100%", height: "auto" }}
                />
              </a>
            </div>

            <h2 id="company-title" className="card-title mt-3 h5 text-white fw-bold">
              {project.companyTitle}
            </h2>
            {/* Company Description */}
            <p className="card-text mt-1  text-white">{project.companyDescription}</p>
            <a
              href={project.companyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary mt-3"
              aria-label={`Visit ${project.companyTitle} website`}
            >
              Visit Website
            </a>
          </div>
        </div>
      </section>
      <section className='tab'>
        <div className="container">
          <Tabs />
        </div>
      </section>
    </>
  );
}

export default ProjectDetails