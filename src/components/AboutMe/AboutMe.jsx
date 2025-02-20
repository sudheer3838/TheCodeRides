import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

import aboutMeImage from '../../assets/images/imagery-bg_1.png'
import './AboutMe.css'
import aboutUsData from '../../data/Aboutme'
function AboutMe() {
  const [clientList, setClientList] = useState([])
  const [show, setShow] = useState(false)
  const [showSecondory, setShowSecondory] = useState(false)
  const [showKno, setShowKno] = useState(false)

  useEffect(() => {
    getData()
  }, [])

  const getData = async () => {
    setClientList(aboutUsData)
  }
  const handleSeeMore = (matchSkill) => {
    setShow(!show)
  }
  const handleSeeMoreSec = (matchSkill) => {
    setShowSecondory(!showSecondory)
  }
  const handleSeeMoreKno = (matchSkill) => {
    setShowKno(!showKno)
  }


  return (
    <div className='about-me-container'>
      <div className="about-me-media">
        <img src={aboutMeImage} alt="" />
      </div>
      <div className="about-me-content">
        {

          clientList.map((List, index) => (
            <div key={index}>
              <h3>{List.aboutTitle}</h3>
              <p className='about-text bold'>{List.aboutSubTitle}</p>
              <p className='about-text'>{List.aboutText}</p>
              <p className='skills-heading'>Primary Skills:</p>
              <div className="tech-tag-container">
                {
                  List.primarySkills.slice(0, 5).map((primarySkill, index) => (
                    <div key={index} className='hover-wrap'>
                      <div className="tag">
                        <span className='d-block hover-content'>{primarySkill.tech}</span>
                      </div>
                      <div className='hover-box'>{primarySkill.techDec}</div>
                    </div>
                  ))
                }
                {show === true ?
                  List.primarySkills.slice(5).map((skill, index) => (
                    <div key={index} className='hover-wrap'>
                      <div className="tag">
                        <span className='d-block hover-content'>{skill.tech}</span>
                      </div>
                      <div className='hover-box'>{skill.techDec}</div>
                    </div>
                  ))
                  : null
                }
                {
                  List.primarySkills.length > 5 ?
                    <div onClick={() => handleSeeMore('primarySkills')} className="tag pointer see-more">

                      {
                        show === false ? 'See More +' : 'Less More'

                      }
                    </div>
                    : null
                }
              </div>
              <p className='skills-heading'>Secondary Skills:</p>
              <div className="tech-tag-container">
                {
                  List.secondarySkills.slice(0, 5).map((primarySkill, index) => (
                    <div key={index} className='hover-wrap'>
                      <div className="tag">
                        <span className='d-block hover-content'>{primarySkill.tech}</span>
                      </div>
                      <div className='hover-box'>{primarySkill.techDec}</div>
                    </div>
                  ))
                }
                {showSecondory === true ?
                  List.secondarySkills.slice(5).map((skill, index) => (
                    <div key={index} className='hover-wrap'>
                      <div className="tag">
                        <span className='d-block hover-content'>{skill.tech}</span>
                      </div>
                      <div className='hover-box'>{skill.techDec}</div>
                    </div>
                  ))
                  : null
                }
                {
                  List.secondarySkills.length > 5 ?
                    <div onClick={() => handleSeeMoreSec('secondarySkills')} className="tag pointer see-more">
                      {
                        showSecondory === false ? 'See More +' : 'Less More'
                      }
                    </div>
                    : null
                }
              </div>



              <p className='skills-heading'>Familiarity:</p>
              <div className="tech-tag-container">
                {/* {console.log(`List`, List.familiaritySkills.slice(0,3))} */}
                {
                  List.familiaritySkills.slice(0, 5).map((primarySkill, index) => (
                    <div key={index} className='hover-wrap'>
                      <div className="tag">
                        <span className='d-block hover-content'>{primarySkill.tech}</span>
                      </div>
                      <div className='hover-box'>{primarySkill.techDec}</div>
                    </div>
                  ))
                }
                {showKno === true ?
                  List.familiaritySkills.slice(5).map((skill, index) => (
                    <div key={index} className='hover-wrap'>
                      <div className="tag">
                        <span className='d-block hover-content'>{skill.tech}</span>
                      </div>
                      <div className='hover-box'>{skill.techDec}</div>
                    </div>
                  ))
                  : null
                }
                {
                  List.familiaritySkills.length > 5 ?
                    <div onClick={() => handleSeeMoreKno('familiaritySkills')} className="tag pointer see-more">
                      {
                        showKno === false ? 'See More +' : 'Less More'

                      }
                    </div>
                    : null
                }
              </div>

              {/* <div className="tech-tag-container">
                {List.familiaritySkills.map((familiaritySkill, index) => (
                  <div key={index} className="tag">{familiaritySkill}</div>
                ))}
              </div> */}
            </div>
          ))

        }
        <Link to="/about" className='btn btn-primary'>
          Explore My Skills
        </Link>
      </div>
      
    </div>

  )
}
export default AboutMe