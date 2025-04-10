import React, { useEffect, useState } from 'react'
import imagery_2 from '../../assets/images/imagery-bg_2.png'
import imagery_3 from '../../assets/images/imagery-bg_3.png'
import imagery_4 from '../../assets/images/imagery-bg_4.png'
import SocialMedia from '../../utlities/SocialMedia/SocialMedia'
import './ContactUs.css'
import Form from './Form/Form'

function ContactUs() {

  return (
    <section aria-label="Contact Section">
    <div className='contact-us-container'>
      <img src={imagery_2} alt="Imagery" className='img-bottom--right' />
      <img src={imagery_3} alt="Imagery" className='img-top--right-overlap' />
      <img src={imagery_4} alt="Imagery" className='img-top--left' />
      <div className="contact-us-wrap">
        <strong>Your Vision, My Expertise</strong>
        <h3>Get in Touch</h3>
        <p>Whether you’re looking for a collaboration or just want to say hi, feel free to drop a message.</p>
        <SocialMedia />
        <Form />
      </div>
    </div></section>
  )
}

export default ContactUs