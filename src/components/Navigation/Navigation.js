import { Col, Container, Navbar, Row } from "react-bootstrap"
import { Link } from 'react-router-dom'
import logo from './house2.png'
import React from 'react'


const NavBar = () => {

    return (
        <Container>
            <Row>
                <Col md={8}>
                    <Navbar bg="dark" variant="dark" className="justify-content-center">
                        <Navbar.Brand>
                            <Link to="/">
                                <img
                                    alt=""
                                    src={logo}
                                    width="30"
                                    height="30"
                                    className="d-inline-block align-top"
                                />{' '}
                            </Link>
                        </Navbar.Brand>
                    </Navbar>
                </Col>
            </Row>
        </Container>

    )
}

export default NavBar