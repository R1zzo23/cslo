import React from 'react'

const Skills = ({ name, image }) =>
  <div className='col-md-2 col-sm-6 col-xs-12'>
    <div className='skillIcon'>
      <img src={image} alt={name} />
    </div>
  </div>

  export default Skills
