import React from 'react'
import { Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BsFillHouseDoorFill } from "react-icons/bs";

const Header = () => {
    return (
        <div>
            <Navbar className="justify-content-center" bg="primary" variant="dark">
                <Navbar.Brand href="/"> <BsFillHouseDoorFill/> </Navbar.Brand>
            </Navbar>
        </div>
    )
}

export default Header; 

