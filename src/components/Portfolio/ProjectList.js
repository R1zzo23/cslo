import React from 'react'

const ProjectList = ({ name, link, devType, bullet1, bullet2 }) =>
  <div className='col-md-4 col-sm-6 col-xs-12'>
    <div className='projectDescription'>
      <h2 className='project-name'><a href={link} target="_blank">{name}</a></h2>
      <h5 className='dev-type'>Development Type: {devType}</h5>
      <ul>
        <li className='project-bullet'>{bullet1}</li>
        <li className='project-bullet'>{bullet2}</li>
      </ul>
    </div>
  </div>

  export default ProjectList
