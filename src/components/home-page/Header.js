import React from "react"
import { Link } from "react-router-dom"

function Header() {
    return(
       <header>
           <Link to="/" >
               <img src="/images/header.png"  alt="header"></img>
           </Link>
       </header>
    )
}
export default Header