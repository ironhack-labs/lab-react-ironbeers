import React, { Component } from 'react'
import BeerService from '../../service';

import BeerCard from './beerCards'


import './index.css'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'


class BeerList extends Component {

  constructor() {
    super();
    this.state = {
      beers: [],
      
    }
    this.beerService = new BeerService();
    
  }
    
  componentDidMount = () => this.updateBeerList()

    updateBeerList = () => {
        console.log(this.beerService)
        this.beerService
          .getAllBeers()
          .then((response) => {
            console.log('respuesta', response);
            this.setState({ beers: response.data });
          })

          .catch((err) => console.log(err));
  };


  render() {
    
      return (
        <>
              
        <Container as="section">
            <Row>
            {this.state.beers.map((elm) => (
                <BeerCard key={elm._id} {...elm} />
            ))}
            </Row>
        </Container>
                            
        </>
    )
  }
}

export default BeerList