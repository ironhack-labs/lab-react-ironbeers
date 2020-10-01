import React from 'react'
import './NavBar.css'
import casa from '../../images/casa.png'
import { Link } from 'react-router-dom'



function NavBar() {

    return (

        <nav>
            <Link to="/"><img className="homeIcon" src={casa} /></Link>
        </nav>

    )
}



export default NavBar