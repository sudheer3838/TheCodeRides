import React from 'react'
import Banner from '../../assets/images/banner.png'
import btnArrow from '../../assets/images/icons/btn-arrow.svg'
import './Slider.css'
import { Link } from 'react-router-dom';

function Slider() {
	return (
		<section aria-label="Hero Section">
		<div>
			<div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
				<div className="carousel-indicators d-none">
					<button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
					<button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
					<button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
				</div>
				<div className="carousel-inner">
					<div className="carousel-item active" data-bs-interval="10000">
						<img src={Banner} className="d-block w-100 carousel-banner" alt="Banner Image" />
						<div className="carousel-caption">
							<h1 className=''>Crafting Engaging User Interfaces.</h1>
							<h4 className=''>Transforming user experiences with seamless design.</h4>

							<Link className='btn btn-default carousel-btn' to="/projects">
								<span className="btn-txt">Explore Projects</span>
								<span className="btn-icon"><img src={btnArrow} alt="Next Icon" /></span>								
							</Link>
						</div>
					</div>
				</div>
				<button className="carousel-control-prev d-none" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
					<span className="carousel-control-prev-icon" aria-hidden="true"></span>
					<span className="visually-hidden">Previous</span>
				</button>
				<button className="carousel-control-next  d-none" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
					<span className="carousel-control-next-icon" aria-hidden="true"></span>
					<span className="visually-hidden">Next</span>
				</button>
			</div>
		</div></section>
	)
}

export default Slider