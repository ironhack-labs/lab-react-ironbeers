import React from 'react'
import { NavLink } from "react-router-dom";

function homeButton() {
    return (
        <div>
           <NavLink exact to="/">
        <img className="header" src="/images/home-header.png" alt=""/>
      </NavLink>
        </div>
    )
}

export default homeButton
