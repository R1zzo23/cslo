import React from 'react'
import skills from './skills.json'
import Skills from './Skills'

const About = () =>
  <div className="skills">
    <h1>My Skills</h1>
    { skills.map((skill, i) =>
      <Skills key={i} {...skill} />)
    }
  </div>

export default About
