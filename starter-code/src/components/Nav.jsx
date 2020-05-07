import React from 'react'
import { NavLink } from 'react-router-dom';

function Nav(props) {
  return (
    <div className="nav">
      <NavLink to="/"><span role="img">🏠</span> Home</NavLink>
    </div>
  )
}

export default Nav


