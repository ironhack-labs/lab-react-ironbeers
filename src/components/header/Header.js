import React from 'react'

import Navbar from 'react-bootstrap/Navbar'
import { Link } from 'react-router-dom'

export default() => {
    return (

         <Navbar bg="dark" >
            
            <Navbar.Brand href="#home">

                <Link to="/">
                    
                    <img
                    src = "https://www.pinclipart.com/picdir/middle/498-4986410_cerveza-png-imagen-dibujo-cerveza-clipart.png"
                    style={{ width:"30px", height:"30px"}}
                    className="d-inline-block align-top"
                    alt="React Bootstrap logo"
                    />

                </Link>

            </Navbar.Brand>
        
        </Navbar>

    )
}