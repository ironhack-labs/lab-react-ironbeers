import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './beers/beers.css';


import { Navbar, Nav } from 'react-bootstrap'


const NavBar = () => {

    return (

      
<>

      <Navbar className="navBar" bg="danger" variant="dark">
      <Navbar.Brand href="/">IronBeers</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="/beers">Beers</Nav.Link>
        <Nav.Link href="/beers/random">Random Beer</Nav.Link>
        <Nav.Link href="/beers/new">New Beer</Nav.Link>
      </Nav>
    </Navbar>



    </>

)
}

export default NavBar;