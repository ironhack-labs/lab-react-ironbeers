import React from "react"
import { NavLink } from "react-router-dom"

const Nav = ()=>{
    return (
       <div className="nav">
            <NavLink to="/">
            <img src="../../images/cerveza.png" alt="Home"/>
        </NavLink>
       </div>
    )
}

export default Nav