import React, { Component } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { Link } from 'react-router-dom'
import './NavBar.css'
class Navigation extends Component {
    constructor() {
        super()
        this.state = {}
    }
    render() {
        return (
            <Navbar bg="dark" expand="lg" variant="dark">
                <Nav className="mr-auto nav-home">
                    <Nav.Link as="div"> <Link to="/"><img src="../../../images/PngItem_765220.png" alt="Home" /></Link></Nav.Link>
                </Nav>
            </Navbar>
        )
    }
}
export default Navigation