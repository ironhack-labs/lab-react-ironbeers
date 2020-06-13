import React from 'react';
// import logo from './logo.svg';
import './../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap'

class Navigation extends React.Component {
    state = ""

    render() {
        return (
            <div className="App">
                <Navbar bg="light" expand="lg">
                    <Navbar.Brand href="/">Ironbeers</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/list">All beers</Nav.Link>
                            <Nav.Link href="/add">Add a beer</Nav.Link>
                            <Nav.Link href="/random">Random beer</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        );
    }
}

export default Navigation;
