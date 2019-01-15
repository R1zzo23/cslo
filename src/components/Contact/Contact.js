import React from 'react'

const Contact = () =>
  <div>
    <h1>Contact Me!</h1>
    <p>Feel free to reach out to me on any of the mediums below!</p>
    <div className="row contactRow">
      <div className='col-md-4 col-sm-12'>
        <a href="https://www.linkedin.com/in/arizzodev/" target="_blank"><i className="fab fa-linkedin"></i></a>
      </div>
      <div className='col-md-4 col-sm-12'>
        <a href="https://twitter.com/arizzo_dev" target="_blank"><i className="fab fa-twitter-square"></i></a>
      </div>
      <div className='col-md-4 col-sm-12'>
        <a href="mailto:arizzo.dev@gmail.com?subject=Freelance Work"><i class="fas fa-envelope"></i></a>
      </div>
    </div>
  </div>

export default Contact
