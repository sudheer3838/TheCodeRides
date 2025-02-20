import React from 'react'
import logo_3 from '../../assets/images/partners-logo/logo_3.svg'
import './ProjectsList.css'
import { useState, useEffect } from 'react';
import projectData from '../../data/ProjectList'
import { Link } from 'react-router-dom';

function ProjectsList() {
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(projectData)

  }, [])
  // console.log(data);

  return (
    <div className='projects-list-container'>
      <h3>From Concept to Completion</h3>
      <p>Witness the journey of each project, where thoughtful planning, creative exploration, and meticulous execution come together to deliver innovative and impactful solutions that meet real-world needs.</p>

      <div className="projects-list-wrapper">
        <div className="projects-list row">
          {
            data.slice(0,6).map((project, indexKey) => (
              <div key={indexKey + 1} className="col-md-6 col-lg-4">
                <div className="card project-card">
                  <div className="card-header card--media">
                    <img src={project.companyLogo} className="card-img-top mw-100" alt={project.companyTitle} />
                  </div>
                  <div className="card-body card--content">
                    <h5 className="card-title">
                      {/* <Link to={`/project-details/${indexKey}`}>{project.companyTitle}</Link>*/}
                      <Link to="/project-details" state={{ project }}>{project.companyTitle}</Link>
                    </h5>
                    <p className="card-text">{project.companyDescription}</p>
                    <p className='card-text bold'><strong>Core Technologies:</strong></p>
                    <div className="tech-tag-container">
                      {                        
                        project.technologyInDevelopmentTags.slice(0,7).map((tag, tagIndex) => (
                          <div key={tagIndex + 1} className="tag">{tag}</div>
                        ))
                      }
                      {
                        project.technologyInDevelopmentTags.length > 7 ? <div className="tag">5+</div> : 'N/A'
                      }
                    </div>
                  </div>
                  <div className="card-footer">
                  <Link className="btn btn-primary" to="/project-details" state={{ project }}>READ MORE</Link>
                    {/* <a href="#" className="btn btn-primary">READ MORE</a> */}
                  </div>
                </div>
              </div>
            ))
          }

          <div className="cta-wrapper">
          <Link to="/projects"  className='btn btn-primary'>VIEW MORE</Link>
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectsList