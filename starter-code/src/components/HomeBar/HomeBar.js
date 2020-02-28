import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import { Link } from 'react-router-dom'

const HomeBar = () => {
    return (
        <Navbar bg="primary">
            <Link to="/">
                <Navbar.Brand href="#home">
                    <img
                        src="https://i.ya-webdesign.com/images/home-png-white-7.png"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                        alt="React Bootstrap logo"
                    />
                </Navbar.Brand>
            </Link>
        </Navbar>
    )
}

export default HomeBar