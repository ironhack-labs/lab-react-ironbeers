import React from 'react'
import { NavLink } from "react-router-dom";

function Header() {
    return (
        <div style={{position:"sticky",top:"0", width:"500px"}}>
              <NavLink exact to="/" >
          <img style={{width:"500px"}}src="/home.png" alt="home"/>
          </NavLink>
            
        </div>
    )
}

export default Header


