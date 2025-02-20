import React from 'react'
import  CreateProjects from '../../components/CreateProjects/Create'
import ContactForm from '../../components/ContactUs/ContactUs'
function Contact() {
  return (
    <div className='containercontainer contactus-page'>
      {/* <CreateProjects /> */}

      <div className="mx-auto">
        <ContactForm />
      </div>
    </div>
  )
}

export default Contact