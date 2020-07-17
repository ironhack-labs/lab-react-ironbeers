import React, { Component } from 'react'
import BeerService from '../service/BeerService'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav';




class Beers extends Component {
  constructor() {
    super();
      this.state = {
        beers: []
    };

    this.beerService = new BeerService();
  }

  updateCoasterList = () => {
    this.beerService
      .getAllBeers()
      .then((response) => this.setState({ beers: response.data }))
      .catch((err) => console.log(err));
  };

    render() {
        return (
        
            <Navbar bg="light" expand="lg">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )}   
}

export default Beers;

 /* {this.state.coasters.map((elm) => (<CoasterCard key={elm._id} {...elm} /> */
     