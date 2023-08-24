import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/home-icon.png';
import { Link } from 'react-router-dom';
import './Navbar.css';

function CustomNavbar() {
    return (
        <>
            <Navbar className="bg">
                <Container>
                    <Navbar.Brand>
                        <Link to='./'>
                            <img
                                src={logo}
                                className="logo"
                            />
                        </Link>
                    </Navbar.Brand>
                </Container>
            </Navbar>
            <br />
        </>
    );
}

export default CustomNavbar;
