import React from 'react'
import './About.css'
import theme_pattern from '../../../assets/theme_pattern.svg'
import profile_pic from '../../../assets/Ram-profile-removebg-preview.png'
const About = () => {
  return (
    <div id ='about' className='about'>
      <div className="about-title">
        <h1>About me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className='about-sections'>
        <div className="about-left">
            <img src={profile_pic} alt="" />
        </div>
        <div className="about-right">
            <div className="about-para">
                <p>Passionate Frontend Developer skilled in building responsive, user-friendly web applications.Proficient in HTML, CSS, JavaScript, and React, with a focus on delivering seamless user experiences and optimized performance.</p>
                
            </div>
            <div className="about-skills">
                <div className="about-skill">
                    <p>HTML &CSS <hr style={{width:"200%"}}/></p>
                </div>
                <div className="about-skill">
                    <p>React JS <hr style={{width:"400%"}}/></p>
                </div>
                <div className="about-skill">
                    <p>Javascript <hr style={{width:"300%"}}/></p>
                </div>
                <div className="about-skill">
                    <p>Next JS <hr style={{width:"250%"}}/></p>
                </div>
            </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
            <h1>3+</h1>
            <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr />
        <div className="about-achievement">
            <h1>10+</h1>
            <p>PROJECTS COMPLETED</p>
        </div>
        <hr />
        <div className="about-achievement">
            <h1>0</h1>
            <p>CLIENTS</p>
        </div>
      </div>
    </div>
  )
}

export default About
