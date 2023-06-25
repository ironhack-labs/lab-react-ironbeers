import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, Outlet } from 'react-router-dom';

function NavBar() {
	return (
		<>
			<Navbar expand="lg" className="nav-dark bg-danger bg-opacity-75">
				<Container>
					<Navbar.Brand as={Link} to="/">
						Ironbeers
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="me-auto">
							<Nav.Link as={Link} to="/">
								Home
							</Nav.Link>
							<Nav.Link as={Link} to="/beer/random">
								Random Beer
							</Nav.Link>
							<Nav.Link as={Link} to="/beer/new">
								New Beer
							</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>

			<Outlet />
		</>
	);
}

export default NavBar;
