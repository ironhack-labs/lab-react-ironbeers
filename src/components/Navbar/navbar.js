import React from 'react'

import Navbar from 'react-bootstrap/Navbar'

import './navbar.css'


const Navigation = () => {

    return (
        <Navbar bg="dark" variant="dark" expand="lg" sticky="top" className='mine-nav'>
            <Navbar.Brand href="/"><img src="../../../images/icon.png" alt=""/></Navbar.Brand>
           
        </Navbar>
    )
}

export default Navigation
