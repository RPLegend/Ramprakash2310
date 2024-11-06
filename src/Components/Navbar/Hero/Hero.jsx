import React from 'react'
import './hero.css'
import updatedRP from '../../../assets/updatedRP.jpg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
const Hero = () => {
  return (
    <><div id='home' className='hero'>
          <img src={updatedRP} alt="profile pic" />
          <h1><span>I'm Ramprakash,</span> frontend developer based in India.</h1>
          <p>Passionate Frontend Developer skilled in building responsive, user-friendly web applications.Proficient in HTML, CSS, JavaScript, and React, with a focus on delivering seamless user experiences and optimized performance.</p>
      </div>
      <div className='hero-action'>
        <div className='hero-connect'><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
        <div className='hero-resume'>My resume</div>
      </div></>
  )
}

export default Hero
