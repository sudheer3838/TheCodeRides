import React, { useEffect } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import './ProjectDetails.css'
import FeaturedProject from '../../components/FeaturedProjects/FeaturedProject';
import Tabs from './Tabs/Tab';
function ProjectDetails() {
  // const {id} = useParams();
  const location = useLocation();
  const { project } = location.state || {};
  const navigate = useNavigate(); // Hook for navigation

  // console.log(project);

  const handleBack = () => {
    sessionStorage.setItem("scrollPosition", window.scrollY);
    navigate(-1);
  };
  const tabsData = [
    { id: "overview", label: "Overview", content: "Project Overview Content." },
    { id: "role", label: "Role & Responsibilities", content: "Role details..." },
    { id: "case-study", label: "Case Study", content: "Case study details..." },
    { id: "challenges", label: "Challenges", content: "Challenges faced..." },
    { id: "results", label: "Results & Achievements", content: "Results info..." },
  ];
  return (
    <>
    <section className='banner-section' role="region"
      aria-labelledby="company-title"
    >
      <button
            className="backBtn btn btn-outline-secondary"
            onClick={() => navigate(-1)}
            aria-label="Go back to the previous page"
          >
            ← Back to project
          </button>
      <div className="projectDetailView">
        <div className="row">
          <div className="col-md-5">
            <div className="box">
              <div className="img-thumbnail mb-3">
                <a href={project.companyUrl} target="_blank" rel="noopener noreferrer">
                  <img
                    src={project.companyLogo}
                    alt={`${project.companyTitle} Logo`}
                    className=""
                    style={{ maxWidth: "100%", height: "auto" }}
                  />
                </a>
              </div>
              <span className="d-inline badge bg-success ">{project.label}</span>
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
          <div className="col-md-7"></div>
        </div>
      </div>
    </section>
    <section className='tab'>
      <div className="container">
        <Tabs tabs={tabsData} />      
      </div>
    </section>
    </>
  );
}

export default ProjectDetails