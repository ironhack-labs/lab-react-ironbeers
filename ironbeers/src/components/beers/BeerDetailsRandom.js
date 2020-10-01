import React, { Component } from 'react';

import Card from 'react-bootstrap/Card';
import MiNavbar from '../navbar/Navbar'

import beerService from '../../service/beers.service'


class BeerDetails extends Component {
  constructor() {
    super()
    this.state = {
      beer: [],
      showModal: false
    }
    this.beerService = new beerService()
  }

  componentDidMount = () => this.loadBeer()

  loadBeer = () => {
    this.beerService
      .getRandomBeer()
      .then(response =>  this.setState({beer: response.data }))
      .catch(err => console.log('Error:', err))
  }

    render() {
      
        
      return (
        <>
        <MiNavbar/>
        
        <Card className="container" style={{ width: '15rem' }}>
            <Card.Img variant="top" src={this.state.beer.image_url} />
            <Card.Body>
                    <Card.Title>{this.state.beer.name}</Card.Title>
                <Card.Text>
                {this.state.beer.tagline}
                    </Card.Text>
                <p>
                {this.state.beer.contributed_by}
                </p>
            </Card.Body>
          </Card> 
          
          </>
    )
  }

}

export default BeerDetails;