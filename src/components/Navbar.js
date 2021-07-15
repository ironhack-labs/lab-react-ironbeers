import React from 'react'
import { Col, Container, Navbar, Row } from "react-bootstrap"
import { Link } from 'react-router-dom'


const NavBar = () => {

    return (
        <Container>
            <Row>
                <Col md={12}>
                    <Navbar bg="info" variant="info" className="justify-content-center">
                        <Navbar.Brand>
                            <Link to="/">Home</Link>
                        </Navbar.Brand>
                    </Navbar>
                </Col>
            </Row>
        </Container>
    )
}

export default NavBar