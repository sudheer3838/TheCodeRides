import React, { Suspense, lazy } from 'react'
const Slider = lazy(() => import('../../components/Slider/Slider'))
const Testimonials = lazy(() => import('../../components/Testimonials/Testimonials'))
const Experience = lazy(() => import('../../components/Experience/Experience'))
const ProjectsList = lazy(() => import('../../components/ProjectsList/ProjectsList'))
const AboutMe = lazy(() => import('../../components/AboutMe/AboutMe'))
const ContactUs = lazy(() => import('../../components/ContactUs/ContactUs'))
const ClientTestimonials = lazy(() => import('../../pages/About/Testimonials/Testimonials'))
const ProfileHighlights = lazy(() => import('../../components/ProfileHighlights/ProfileHighlights'))
import Loader from '../../utlities/Loader/Loader'
function Home() {
  return (
    <>
      <Suspense fallback={<Loader />}>
          <Slider />
          <ProfileHighlights />
          <Experience />
          <Testimonials />
          <ProjectsList />
          <AboutMe />
          <ContactUs />
          <ClientTestimonials />
      </Suspense>
    </>
  )
}

export default Home