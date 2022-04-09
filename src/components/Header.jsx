import React from 'react'
import { Link, useLocation } from "react-router-dom"; 

 function Header() {
    let location = useLocation()
    location = location.pathname
    return (

        location === '/' ? null :
        <div className="home">
            <Link to="/"> 
        <img className="image" src='https://cdn-icons-png.flaticon.com/512/25/25694.png'/>
            </Link>
        </div>     
    )
}

export default Header