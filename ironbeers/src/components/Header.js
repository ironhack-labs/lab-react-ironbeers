import React from 'react'
import './Homepage.css'
import { Navbar } from 'react-bootstrap'


const Header = () => {
    return (
        <div>

            <Navbar bg="dark">
                <Navbar.Brand href="#home">
                    <img src="./images/beer-header" width="30" height="30" className="d-inline-block align-top" alt="Beer logo" />
                </Navbar.Brand>
            </Navbar>

        </div>
    )
}

export default Header


