import React from 'react'
import Projects from './projects.json'
import ProjectList from './ProjectList'

const Portfolio = () =>
  <div>
    <h1>My Portfolio</h1>
    <br />
    <div className="row projectsRow">
      { Projects.map((project, i) =>
        <ProjectList key={i} {...project} />
      )}
    </div>
  </div>

  export default Portfolio
