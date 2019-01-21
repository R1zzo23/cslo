import React from 'react';
import { Link } from 'react-router-dom'

const Header = () =>
    <nav className='navbar navbar-dark navbar-expand-lg'>
      <div className='container'>
        <Link className='navbar-brand' to='/'>CSL Online</Link>
        <form className='form-inline my-2 my-lg-0'>
          <a className='nav-item nav-link' href='http://www.championsimleague.com/index.php' target='_blank'>Forums</a>
          <li className="nav-item nav-link dropdown">
            <a className="nav-item nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Draft Classes
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <Link className="dropdown-item" to="/draftclass">2024</Link>
              <div className="dropdown-divider"></div>
              <Link className="dropdown-item" to="/draftclass">2025</Link>
              <div className="dropdown-divider"></div>
              <Link className="dropdown-item" to="/draftclass">2026</Link>
            </div>
          </li>
          <Link className='nav-item nav-link' to='/sendscouts'>Send Scouts</Link>
          <input className='form-control mr-sm-2 csl-search' type='search' placeholder="Try 'Zion Williamson'" aria-label='Search'></input>
          <button className='btn btn-outline-success my-2 my-sm-0 btn-csl-search' type='submit'>Search</button>
        </form>
        <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarNavAltMarkup' aria-controls='navbarNavAltMarkup' aria-expanded='false' aria-label='Toggle navigation'>
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarNavAltMarkup'>
          <div className='navbar-nav ml-auto'>
            <a className='nav-item nav-link active' href=''>Login <span className='sr-only'>(current)</span></a>
          </div>
        </div>
      </div>
    </nav>

export default Header
