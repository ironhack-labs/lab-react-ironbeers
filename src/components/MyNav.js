import React, { Component } from 'react'
import { Navbar, Nav } from "react-bootstrap"
import { FaHome } from "react-icons/fa"
import { Link } from "react-router-dom"

export default class MyNav extends Component {
    render() {
        return (
            <div>
                <Navbar bg="primary" variant="dark" className="my-navbar">
                    <Nav className="mr-auto my-nav">
                        <Link to={"/"}>
                            <div className="nav-icon-div">
                                <FaHome size={24} />
                            </div>
                        </Link>
                    </Nav>
                </Navbar>
            </div>
        )
    }
}
