import React from 'react'
import Slider from '../../components/Slider/Slider'
import Testimonials from '../../components/Testimonials/Testimonials'
import Experience from '../../components/Experience/Experience'
import ProjectsList from '../../components/ProjectsList/ProjectsList'
import AboutMe from '../../components/AboutMe/AboutMe'
import ContactUs from '../../components/ContactUs/ContactUs'
import ClientTestimonials from '../../pages/About/Testimonials/Testimonials'

function Home() {
  return (
    <>
      <Slider />
      <Experience />
      <Testimonials />
      <ProjectsList />
      <AboutMe />      
      <ContactUs />
      <ClientTestimonials />
    </>
  )
}

export default Home