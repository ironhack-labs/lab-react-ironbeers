import React from 'react'
import {Navbar,Nav} from "react-bootstrap";

const Navbars= () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand href="#home">Iron-Beeers</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav"/>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/beers">Beers</Nav.Link>
          <Nav.Link href="/randombeers">Random Beers</Nav.Link>
          <Nav.Link href="/newbeer">New Beer</Nav.Link>
          <Nav.Link href="/searchbeer">Search Beer</Nav.Link>

        </Nav>

      </Navbar.Collapse>
    </Navbar>

  );
}
export default Navbars