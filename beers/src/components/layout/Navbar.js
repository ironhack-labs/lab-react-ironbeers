import React from 'react'
import { Link } from 'react-router-dom'

import Navbar from 'react-bootstrap/Navbar'
import HomeImg from './homeLogo.png'

const NavBar = () =>{

    return (

        <Navbar style = {{backgroundColor:'#3dc4fc'}} >
            <Navbar.Brand style={{margin: '0 auto'}}>
                <Link to='/'>
                    <img
                    src={HomeImg}
                    width="35"
                    height="30"
                    className="d-inline-block align-top"
                    alt="Home beer logo"
                    />
                </Link>
            </Navbar.Brand>

        </Navbar>
    
    )  

}

export default NavBar