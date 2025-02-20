import React, { useState, useEffect } from 'react'

import imageryBG_5 from '../../assets/images/imagery-bg_5.png'
import defaultImage from '../../assets/images/defaultImage.svg'
import './Testimonials.css'
import { Link } from 'react-router-dom'

import TestimonialsData from '../../data/Testimonials'
import TestimonialsLogo from '../../data/Logo'

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
            <h3>A Journey of Accomplishments</h3>
            <p>Every project tells a story of success, innovation, and dedication. From ambitious concepts to tangible outcomes, each achievement reflects our unwavering commitment to quality and excellence.</p>
          </div>
        ))
      }
      <div className="testimonials-mx">
        <div className="testimonials-logos">
          {
            TestimonialsLogo.slice(0, 12).map((logo, indexKey) => (
              <div className="logo-box loop-div" key={indexKey + 1}>
                <Link data-bs-toggle="modal" data-bs-target="#TestimonialLogoModal">
                  <div className="box">
                    <img src={logo} alt={`Partners Logo, ${indexKey}  `} onError={handleImage} />
                  </div>
                </Link>
              </div>
            ))
          }
        </div>
      </div>
      <div className="cta-wrapper d-none">
        <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">VIEW MORE</button>
      </div>
      <img className='bg-placement-bottom' src={imageryBG_5} alt="Imager Background" />
    </div>
  )
}

export default Testimonials