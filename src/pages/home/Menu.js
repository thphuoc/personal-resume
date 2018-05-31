import React from 'react'
import profile from '../../asserts/img/profile.jpg'
import Link from 'react-router-dom/es/Link'

const Menu = () => (
  <nav className='navbar navbar-expand-lg navbar-dark bg-primary fixed-top' id='sideNav'>
    <a className='navbar-brand js-scroll-trigger' href='#page-top'>
      <span className='d-block d-lg-none'>Start Bootstrap</span>
      <span className='d-none d-lg-block'>
          <img className='img-fluid img-profile rounded-circle mx-auto mb-2' src={profile} alt=''/>
        </span>
    </a>
    <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarSupportedContent'
            aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation'>
      <span className='navbar-toggler-icon'/>
    </button>
    <div className='collapse navbar-collapse' id='navbarSupportedContent'>
      <ul className='navbar-nav'>
        <li className='nav-item'>
          <Link to='/' className='nav-link js-scroll-trigger'>About</Link>
        </li>
        <li className='nav-item'>
          <Link to='/experience' className='nav-link js-scroll-trigger'>Experience</Link>
        </li>
        <li className='nav-item'>
          <Link to='/education' className='nav-link js-scroll-trigger'>Education</Link>
        </li>
        <li className='nav-item'>
          <Link to='/skills' className='nav-link js-scroll-trigger'>Skills</Link>
        </li>
        <li className='nav-item'>
          <Link className='nav-link js-scroll-trigger' to='/interests'>Interests</Link>
        </li>
        <li className='nav-item'>
          <Link className='nav-link js-scroll-trigger' to='/awards'>Awards</Link>
        </li>
      </ul>
    </div>
  </nav>
)

export default Menu