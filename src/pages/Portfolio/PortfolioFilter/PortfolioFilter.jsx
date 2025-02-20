import React, { useState } from 'react'
import { motion } from "framer-motion"; // Import Framer Motion
import Image from '../../../assets/images/partners-logo/logo_2.png'
import projects from '../../../data/ProjectList'
import { Link } from 'react-router-dom';

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
            <button onClick={() => setSelectedCategory("all")}>All</button>
            <button onClick={() => setSelectedCategory("web")}>Web Development</button>
            <button onClick={() => setSelectedCategory("uiux")}>UI/UX</button>
            <button onClick={() => setSelectedCategory("react")}>React</button>
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
                        project.technologyInDevelopmentTags.slice(0, 7).map((tag, tagIndex) => (
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