import React, { useState } from 'react'
import imagery_2 from '../../assets/images/imagery-bg_2.png'
import imagery_3 from '../../assets/images/imagery-bg_3.png'
import imagery_4 from '../../assets/images/imagery-bg_4.png'

import facebookIcon from '../../assets/images/social-media-icon/facebook-icon.svg'
import twitterIcon from '../../assets/images/social-media-icon/twitter-icon.svg'
import linkedinIcon from '../../assets/images/social-media-icon/linkedin-icon.svg'
// import instagramIcon from '../../assets/images/social-media-icon/instagram-icon.svg'

import './ContactUs.css'

function ContactUs() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const errors = {};
    if (!formData.fullName.trim()) {
      errors.fullName = 'Full name is required.';
    }
    if (!formData.email.trim()) {
      errors.email = 'Email is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Invalid email address.';
    }
    if (!formData.message.trim()) {
      errors.message = 'Message is required.';
    }
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      setSubmitted(true);
      setFormData({ fullName: '', email: '', message: '' });
      setErrors({});
    } else {
      setErrors(validationErrors);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }; return (
    <div className='contact-us-container'>
      <img src={imagery_2} alt="Imagery" className='img-bottom--right' />
      <img src={imagery_3} alt="Imagery" className='img-top--right-overlap' />
      <img src={imagery_4} alt="Imagery" className='img-top--left' />
      <div className="contact-us-wrap">
        <strong>Your Vision, My Expertise</strong>
        <h3>Get in Touch</h3>
        <p>Whether you’re looking for a collaboration or just want to say hi, feel free to drop a message.</p>
        <div className="social-media-link">

          <nav aria-label="Social Media Links">
            <ul className="social-links list-unstyled" >
              <li>
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Visit our Facebook page">
                  <span className="sr-only">Facebook</span>
                  <img src={facebookIcon} alt="Facebook Icon" width="32" height="32" />
                </a>
              </li>
              <li>
                <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Visit our Twitter page">
                  <span className="sr-only">Twitter</span>
                  <img src={twitterIcon} alt="Twitter Icon" width="32" height="32" />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Visit our Instagram page">
                  <span className="sr-only">Instagram</span>
                  <img src={linkedinIcon} alt="Instagram Icon" width="32" height="32" />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="Visit our LinkedIn page">
                  <span className="sr-only">LinkedIn</span>
                  <img src={linkedinIcon} alt="LinkedIn Icon" width="32" height="32" />
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <form onSubmit={handleSubmit} aria-label="Contact form">
          <div className='form-group'>
            <label className='form-label' htmlFor="fullName">Full Name</label>
            <input
              className='form-control'
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              aria-required="true"
              aria-invalid={!!errors.fullName}
              placeholder='Enter your full name'
            />
            {errors.fullName && (
              <span id="fullNameError" role="alert" style={{ color: 'red' }}>
                {errors.fullName}
              </span>
            )}
          </div>

          <div className='form-group'>
            <label className='form-label' htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              className='form-control'
              onChange={handleChange}
              aria-required="true"
              placeholder='Enter your email'
              aria-invalid={!!errors.email}
            />
            {errors.email && (
              <span id="emailError" role="alert" style={{ color: 'red' }}>
                {errors.email}
              </span>
            )}
          </div>

          <div className='form-group'>
            <label className='form-label' htmlFor="message">Write your message</label>
            <textarea
              id="message"
              name="message"
              className='form-control'
              value={formData.message}
              onChange={handleChange}
              placeholder='Write your message...'
              aria-required="true"
              aria-invalid={!!errors.message}
            />
            {errors.message && (
              <span id="messageError" role="alert" style={{ color: 'red' }}>
                {errors.message}
              </span>
            )}
          </div>

          <div className="cta-wrapper">
          <button type="submit" className='btn btn-primary'>SEND MESSAGE</button>
          </div>

          {submitted && <p role="status" style={{ color: 'green' }}>Form submitted successfully!</p>}
        </form>


      </div>
    </div>
  )
}

export default ContactUs