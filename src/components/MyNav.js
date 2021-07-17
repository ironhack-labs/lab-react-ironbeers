import React, { Component } from 'react';
import {Navbar, Container} from 'react-bootstrap';
import {Link} from  'react-router-dom';

class MyNav extends Component {
    render() {
        return (
            <Navbar bg="primary" variant="dark" expand="lg">
                <Container>
                    <Navbar.Brand>
                        <Link to="/"><h2 style={{color: 'black', textDecoration: 'none'}}>Home</h2></Link>
                    </Navbar.Brand>
                </Container>
            </Navbar>
        )
    }
}

export default MyNav;