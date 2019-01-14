import React from 'react'

const Skills = ({ name, image }) =>
  <div className='col-md-3 col-xs-6'>
    <div className='skillIcon'>
      <img src={image} alt={name} />
    </div>
  </div>

  export default Skills
