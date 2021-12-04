import React from 'react'
import {Navbar, Container} from  'react-bootstrap'

function NavBar() {
    return (
        <div>
            <Navbar bg="dark">
                <Container>
                    <Navbar.Brand href="/">
                    <img
                        src="https://coursereport-s3-production.global.ssl.fastly.net/uploads/school/logo/84/original/logo-ironhack-blue.png"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                        alt="React Bootstrap logo"
                    />
                    </Navbar.Brand>
                </Container>
                </Navbar>
        </div>
    )
}

export default NavBar
