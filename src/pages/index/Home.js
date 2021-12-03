import React from "react";
import { Navbar, Nav, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import imgAllBeers from "../../assets/beers.png"
import imgNewBeer from "../../assets/new-beer.png"
import imgRandomBeers from "../../assets/random-beer.png"

const Home = () => {
  return <Container className="Homepage"><h1>Hola ironhackers</h1>

      
      <Navbar bg="dark" variant="dark">
      <Container>
        <Nav className="me-auto">
          <img src={imgAllBeers} width="100%" alt="beers"/>
          <Nav.Link as={Link} to="/beers"><h2>All beers</h2></Nav.Link>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          <img src={imgRandomBeers} width="100%" alt="beers"/>
          <Nav.Link as={Link} to="/randomBeer"><h2>Random Beers</h2></Nav.Link>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          <img src={imgNewBeer} width="100%" alt="beers"/>
          <Nav.Link as={Link} to="/newbeer"><h2>New Beer</h2></Nav.Link>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </Nav>
      </Container>
    </Navbar> 
  
  </Container>
}

export default Home