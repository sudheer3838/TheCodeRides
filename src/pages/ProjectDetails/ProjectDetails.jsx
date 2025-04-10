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
	const handleBack = () => {
		sessionStorage.setItem("scrollPosition", window.scrollY);
		navigate(-1);
	};
	return (
		<>
			<section className='banner-section' role="region" aria-labelledby="company-title">
				<svg className="yellow-border" preserveAspectRatio="none" viewBox="0 0 100 100" role="none">
					<polygon points="100,100 100,0 0,100" opacity="0.85" fill="#2d59cf"></polygon>
				</svg>
				<button
					className="backBtn btn btn-outline-secondary"
					onClick={handleBack}
					aria-label="Go back to the previous page"
				>
					← Back to project
				</button>
				<div className="projectDetailView">
					<iframe className='live-project-iframe' src={project?.companyUrl ?? 'URL not found!'}></iframe>
					<div className="box">
						<div className="d-flex">
							<p className="inline-flex badge bg-warning mb-3 py-2 px-3 fs-14 badge-category">{project?.categoryLabel ?? 'N/A'}</p>
							<p className="inline-flex badge bg-success mb-3 py-2 px-3 fs-14 mx-2"> {project?.label ?? 'N/A'}</p>
						</div>
						<div className="img-thumbnail mb-3 mt-2">
							<a href={project?.companyUrl ?? 'URL not found!'} target="_blank" rel="noopener noreferrer">
								<img
									src={project?.companyLogo}
									alt={`${project?.companyTitle} Logo`}
									className=""
									style={{ maxWidth: "100%", height: "auto" }}
								/>
							</a>
						</div>

						<h2 id="company-title" className="card-title mt-3 h5 text-white fw-bold">
							{project?.companyTitle}
						</h2>
						{/* Company Description */}
						<p className="card-text mt-1  text-white">{project?.companyDescription}</p>
						<a
							href={project?.companyUrl ?? 'URL Not Found!'}
							target="_blank"
							rel="noopener noreferrer"
							className="btn btn-primary mt-3"
							aria-label={`Visit ${project?.companyTitle} website`}
						>
							Visit Website
						</a>
					</div>
				</div>
			</section>
			<section className='tab'>
				<div className="container">
					<Tabs ProjectDetails={project} />
				</div>
			</section>
		</>
	);
}

export default ProjectDetails