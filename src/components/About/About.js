import React from 'react'
import skills from './skills.json'
//import aboutBio from './aboutBio.json'
import Skills from './Skills'
import AboutMe from './AboutMe'
import Goal from './Goal'

const About = () =>
  <div>
    <h1>My Skills</h1>
    <br />
    <div className="row skillRow">
      { skills.map((skill, i) =>
        <Skills key={i} {...skill} />
      )}
    </div>
    <br />
    <div className='row'>
      <Goal />
    </div>
    <div className='row'>
      <AboutMe />
    </div>
  </div>

export default About
