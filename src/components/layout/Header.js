import { Navbar } from "react-bootstrap"
import React from 'react'
import { Link } from 'react-router-dom'
import ico from './../../assets/ico.PNG'



const Header = () => {

    return(
        <Navbar>
            <Link to='/'><img src={ico}/></Link>
        </Navbar>
    )
}

export default Header