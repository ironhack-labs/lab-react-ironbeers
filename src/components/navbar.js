
import React from "react"
import {NavLink} from "react-router-dom"



const Navbar = () =>{

    return(
        <nav>
            <ul>
               <li>
                    <NavLink  to="/beers"> Beers List </NavLink>
               </li> 
               <li>
                    <NavLink  to="/random-beer"> Random Beer </NavLink>
               </li> 
               <li>
                    <NavLink to="/new-beer"> New Beer </NavLink>
               </li> 
            </ul>
        </nav>
    )
}

export default Navbar