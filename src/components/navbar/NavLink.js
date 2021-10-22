import React from 'react'

const NavLink = (props) => {
  return (
    <li className="navitemslink">
      <a href="#">{props.children}</a>
    </li>
  )
}

export default NavLink
