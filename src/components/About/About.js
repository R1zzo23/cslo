import React from 'react'
import skills from './skills.json'
//import aboutBio from './aboutBio.json'
import Skills from './Skills'
import AboutMe from './AboutMe'
import Goal from './Goal'

const About = () =>
  <div className="skills text-center">
    <h1>My Skills</h1>
    <br />
    <div className="row">
      { skills.map((skill, i) =>
        <Skills key={i} {...skill} />
      )}
    </div>
    <br />
    <div className='row'>
      <AboutMe />
    </div>
    <div className='row'>
      <Goal />
    </div>
  </div>

export default About
