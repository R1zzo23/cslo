import React from 'react';
import { Link } from 'react-router-dom'
import SignOutButton from '../components/Authentication/SignOut';

const Header = ({ authUser }) => (
  <div>{authUser ? <HeaderAuth /> : <HeaderNonAuth />}</div>
);

const HeaderAuth = () => (
  <nav className='navbar navbar-dark navbar-expand-lg'>
    <div className='container'>
      <Link className='navbar-brand' to='/'>CSL Online</Link>
      <form className='form-inline my-2 my-lg-0'>
        <a className='nav-item nav-link' href='http://www.championsimleague.com/index.php' rel="noopener noreferrer" target='_blank'>Forums</a>
        <li className="nav-item nav-link dropdown">
          <a className="nav-item nav-link dropdown-toggle" href="" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Draft Classes
          </a>
          <div className="dropdown-menu" aria-labelledby="navbarDropdown">
            <Link className="dropdown-item" to="/draftclass/2024">2024</Link>
            <div className="dropdown-divider"></div>
            <Link className="dropdown-item" to="/draftclass/2025">2025</Link>
            <div className="dropdown-divider"></div>
            <Link className="dropdown-item" to="/draftclass/2026">2026</Link>
            <div className="dropdown-divider"></div>
            <Link className="dropdown-item" to="/draftclass/2027">2027</Link>
            <div className="dropdown-divider"></div>
            <Link className="dropdown-item" to="/draftclass/2028">2028</Link>
          </div>
        </li>
        <Link className='nav-item nav-link' to='/bigboard'>Big Board</Link>
        <Link className='nav-item nav-link' to='/sendscouts'>Send Scouts</Link>
        <Link className='nav-item nav-link' to='/interviews'>Schedule Interviews</Link>
        <Link className='nav-item nav-link' to='/team'>Team Page</Link>
      </form>
      <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarNavAltMarkup' aria-controls='navbarNavAltMarkup' aria-expanded='false' aria-label='Toggle navigation'>
        <span className='navbar-toggler-icon'></span>
      </button>
      <div className='collapse navbar-collapse' id='navbarNavAltMarkup'>
        <div className='navbar-nav ml-auto'>
          <SignOutButton />
        </div>
      </div>
    </div>
  </nav>
);

const HeaderNonAuth = () => (
  <nav className='navbar navbar-dark navbar-expand-lg'>
    <div className='container'>
      <Link className='navbar-brand' to='/'>CSL Online</Link>
      <form className='form-inline my-2 my-lg-0'>
        <a className='nav-item nav-link' href='http://www.championsimleague.com/index.php' target='_blank'>Forums</a>
      </form>
      <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarNavAltMarkup' aria-controls='navbarNavAltMarkup' aria-expanded='false' aria-label='Toggle navigation'>
        <span className='navbar-toggler-icon'></span>
      </button>
      <div className='collapse navbar-collapse' id='navbarNavAltMarkup'>
        <div className='navbar-nav ml-auto'>
          <Link className='nav-item nav-link active' to='/login'>Log In<span className='sr-only'>(current)</span></Link>
        </div>
      </div>
    </div>
  </nav>
);

export default Header
