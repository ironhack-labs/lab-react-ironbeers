import React, { Component } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import BeerService from '../../services/beers.service'


export default class RandomBeer extends Component {
  constructor() {
    super();
    this.state = {
      beers: null
    }
    this.BeerService = new BeerService()
  }
  componentDidMount() {
    
    this.BeerService.getRandomBeer()
      .then(res => {
        this.setState({
          ...this.state,
          beers: res.data
        })
      })
      .catch(err => console.error(err))
  }


  render() {
    return (
      <Container>
  
      {
        this.state.beers ?
        <Row>
          <Col md={6}>
              <h1>Beer {this.state.beers.name}</h1>
              <p>Descripción: {this.state.beers.description}</p>
              <p>{this.state.beers.abv}</p>
              <hr />
          </Col>
          <Col md={4}>
            <img src={this.state.beers.image_url} alt={this.state.beers.title} />
          </Col>
        </Row>
        : 
        <h3>Cargando...</h3>
      }
    </Container>
    )
  }
}
