import React from 'react'
import { Col, Container, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <Container>
            <Col>
                <Navbar>
                    <Link to="/">Home</Link>
                </Navbar>
            </Col>
        </Container>
    )

}

export default NavBar