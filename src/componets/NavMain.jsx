import React from 'react'
import { NavLink } from "react-router-dom";


const NavMain = () =>{
    return (
        <nav className="nav-bar">
        <ul
          style={{
            display: "flex",
            listStyleType: "none",
            justifyContent: "space-between",
           
          }}
        >
          
          <li>
            <NavLink exact to="/">Home
              
            </NavLink>
                </li>
                
                <li>
            <NavLink to="/beers">Beers</NavLink>
          </li>
         
          <li>
            <NavLink to="/random-beer">Random Beer</NavLink>
          </li>
          <li>
            <NavLink to="/new-beer">New Beer</NavLink>
          </li>
        </ul>
      </nav>
    )
}

export default NavMain
