import React from "react";
import Slider from "react-slick";
import Projects from "../../data/FeaturedProject";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './FeaturedProject.css'


const FeaturedProject = () => {
	const categoryText = {
		web: "Web Application",
		react: "React Development",
		uiux: "UI/UX Design",
	};

	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 5000,
	};

	return (
		<div className="container featured_project">
			<h2 id="featured-project">Featured Project's</h2>
			<Slider {...settings}>
				{Projects.map((project, index) => (
					<div key={index} className="p-3">
						<div className="card shadow-sm p-3">
							<div className="d-flex align-items-center1 mb-3">
								<div className="img-thumbnail">
									<img
										src={project.companyLogo}
										alt={project.companyTitle}
									// className="me-3"
									// style={{ width: "50px", height: "50px", objectFit: "contain" }}
									/>
								</div>
								<div><div className="mb-3">
									<span className="badge bg-secondary me-2" role="status">
										{/* {project.category} */}
										{categoryText[project.category] || "Other"}
									</span>
									<span className="badge bg-success" role="status">
										{project.label}
									</span>
								</div>
									<h3 className="h5 mb-1">{project.companyTitle}</h3>
									<p className="small text-muted">{project.companyDescription}</p>
									<p className="mb-1"><strong>Role & Responsibilities:</strong></p>
									<p className="small">{project.labelRole}</p>
									<div className="mt-3">
										<a
											href={project.companyUrl}
											target="_blank"
											rel="noopener noreferrer"
											className="btn btn-link p-0"
											aria-label={`Visit website of ${project.companyTitle}`}
										>
											Visit Website
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				))}
			</Slider>
		</div>
	);
};

export default FeaturedProject;
