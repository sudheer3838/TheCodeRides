import React from 'react';
import experienceBg from '../../assets/images/experience-bg.png'
import breifCaseIcon from '../../assets/images/icons/breif-case.svg'
import brandIcon from '../../assets/images/icons/brand-icon.svg'
import handsBound from '../../assets/images/icons/hands-bound.svg'




import './Experience.css'

function Experience() {
  return (
    <div className='experience-container'>
      <img src={experienceBg} className="d-block experience-banner" alt="Experience Section Banner Image" />
      <div className="experience-caption">
        <div className="box box--content">
          <span className="box-icon">
            <img src={breifCaseIcon} className="d-block" alt="Icon" />
          </span>
          <h5>
            <strong>6+ Years</strong>
            <span>in UI/UX Development</span>
          </h5>
        </div>
        <div className="box box--content">
          <span className="box-icon">
            <img src={brandIcon} className="d-block" alt="Icon" />
          </span>
          <h5>
            <strong>10+</strong>
            <span>Brands Across Industries</span>
          </h5>
        </div>
        <div className="box box--content">
          <span className="box-icon">
            <img src={handsBound} className="d-block" alt="Icon" />
          </span>
          <h5>
            <strong>50+</strong>
            <span>Successful Projects Delivered</span>
          </h5>
        </div>
      </div>
    </div>
  )
}

export default Experience