import React, { Component } from 'react';
import BeerService from '../../../service/beerService'

import BeerCard from './beer-card'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';

class BeerList extends Component {
  constructor() {
    super();
    this.state = {
      beers: undefined,
    };

    this.BeerService = new BeerService();
  }

  componentDidMount = () => this.updateBeerList();

  updateBeerList = () => {
    this.BeerService.getAllBeers()
      .then((response) => this.setState({ beers: response.data }))
      .catch((err) => console.log(err));
  }

  handleBeerSubmit = () => {
    
    this.updateBeerList()
  }

  render() {
      return (
        <>
          <Container as="main" >
            <h1>All Beers</h1>
                  {!this.state.beers ? (<h3>Loading...</h3>)
                      : (
              <Row>
                {this.state.beers.map((elm) => (
                  <BeerCard key={elm._id} {...elm} />
                ))}
              </Row>
            )}
          </Container>
        </>
      );
  }
}

export default BeerList
