import React, { useState } from 'react'
import { motion } from "framer-motion"; // Import Framer Motion
import Image from '../../../assets/images/partners-logo/logo_2.png'
import projects from '../../../data/ProjectList'
import { Link } from 'react-router-dom';
import { Filter } from "lucide-react";

function PortfolioFilter() {

  const [selectedCategory, setSelectedCategory] = useState("all");
  return (
    <section id="portfolio" className="portfolio-section container container-space ">
      <div className="row d-flex align-items-center">
        <div className="col-md-5">
          <h2>From Concept to Completion</h2>
        </div>
        <div className="col-md-7">


          <div className="portfolio-filter">
            <div className="dropdown">
              <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                <span className="flex items-center text-lg font-semibold">
                  <Filter className="mr-2" /> Filter Projects:
                </span>
              </button>
              <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li><button className='dropdown-link' onClick={() => setSelectedCategory("all")}>All</button></li>
                <li><button onClick={() => setSelectedCategory("web")}>UI Development</button></li>
                <li><button onClick={() => setSelectedCategory("uiux")}>UI/UX Designing</button></li>
                <li><button onClick={() => setSelectedCategory("react")}>React JS</button></li>
              </ul>
            </div>
          </div>
        </div>
      </div>


      <motion.div className="portfolio-grid row" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        {
          projects
            .filter(project => selectedCategory === "all" || project.category === selectedCategory)
            .map((project, indexKey) => (
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
                        project.technologyInDevelopmentTags?.slice(0, 7).map((tag, tagIndex) => (
                          <div key={tagIndex + 1} className="tag">{tag}</div>
                        ))
                      }
                      {
                        project.technologyInDevelopmentTags?.length > 7 ? <div className="tag">{`${project.technologyInDevelopmentTags.length - 7} +`}</div> : null
                      }
                    </div>
                  </div>
                  <div className="card-footer">
                    <Link className="btn btn-primary" to="/project-details" state={{ project }}>READ MORE</Link>
                  </div>
                </div>
              </div>
            ))
        }
      </motion.div>
    </section>

  )
}

export default PortfolioFilter