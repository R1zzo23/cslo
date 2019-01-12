import React from 'react'

const Header = () =>
  <nav className='navbar navbar-dark navbar-expand-lg'>
    <div className='container'>
      <a className='navbar-brand' href=''>AJR Designs</a>
      <form className='form-inline my-2 my-lg-0'>
        <a className='nav-item nav-link active' href=''>Home</a>
        <a className='nav-item nav-link' href=''>About</a>
        <a className='nav-item nav-link' href=''>Resume</a>
        <a className='nav-item nav-link' href=''>Contact</a>
      </form>
    </div>
  </nav>

  export default Header
