import React, { useState, useEffect } from 'react'
import TestimonialsData from '../../../data/Testimonials'
import imageryBG_5 from '../../assets/images/imagery-bg_5.png'
import defaultImage from '../../assets/images/defaultImage.svg'
import './Testimonials.css'
import TestimonialsModal from './TestimonialsModal'
import { Link } from 'react-router-dom'
import TestimonialLogoModal from './TestimonialLogoModal'

function Testimonials() {
  const [testimonials, setTestimonials] = useState([]);
  useEffect(() => {
    loadData()
  }, [])

  const handleImage = (e) => {
    e.target.src = defaultImage
  }

  const loadData = async () => {
    setTestimonials(TestimonialsData)
  }
  return (
    <div className='testimonials-container'>
      { 
        testimonials.map((testimonial, indexKey) => (
          <div key={indexKey + 1}>
            <h3>{testimonial.testimonialTitle}</h3>
            <p>{testimonial.testimonialSubTitle}</p>

            <TestimonialsModal logo={testimonial} handleImageError={handleImage} />

            <div className="testimonials-mx">
              <div className="testimonials-logos">
                {
                  testimonial.logos.slice(0, 6).map((logo, indexKey) => (
                    <div className="logo-box loop-div" key={indexKey + 1}>
                      <Link data-bs-toggle="modal" data-bs-target="#TestimonialLogoModal">
                        <div className="box">
                          <img src={logo.imageThumbnail} alt={`Partners Logo, ${indexKey}  `} onError={handleImage} />
                        </div>
                      </Link>
                      <TestimonialLogoModal companyDetails={logo} indexKey={indexKey} />
                    </div>
                  ))
                }
              </div>
            </div>
          </div>
        ))
      }

      <div className="cta-wrapper">
        <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">VIEW MORE</button>
      </div>
      <img className='bg-placement-bottom' src={imageryBG_5} alt="Imager Background" />
    </div>
  )
}

export default Testimonials