import React from 'react'
import NavLink from './NavLink'
import './navbar.css'

const Navbar = () => {
  return (
    <nav className="nav">
      <div className="container">
        <div className="main">
          <div className="navBrand">
            <img src="assets/images/logo.png" alt="" />
          </div>
          <div className="navItems">
            <ul>
              <NavLink>Home</NavLink>
              <NavLink>About Me</NavLink>
              <NavLink>Educations</NavLink>
              <NavLink>Skills</NavLink>
              <NavLink>Latest Projects</NavLink>
              <NavLink>Contacts</NavLink>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
