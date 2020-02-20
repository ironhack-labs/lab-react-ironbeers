import React from 'react'
import { NavLink, withRouter } from 'react-router-dom'

const Header = (props) => {
  return (
    <nav className={props.location.pathname === "/" ? "is-hidden" : "headerMain"}>
      <NavLink exact to="/"></NavLink>
    </nav>
  )
}

export default withRouter(Header);
