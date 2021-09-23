import React, { Component } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import BeersService from './../../../services/beers.service';


export default class RandomBeerPage extends Component {

  constructor() {
    super();

    this.state = {
      beer: null
    }
    this.BeersService = new BeersService();
  }

  componentDidMount = () => {

    this.BeersService.getRandomBeer()
      .then(res => {
        this.setState({
          ...this.state,
          beer: res.data
        })
      })
      .catch(err => console.error(err))
  }

  render() {
    return (
      <div>
        {this.props.children}
        <Container>
          {
            this.state.beer ?
              <Row>
                <Col md={6}>
                  <h1>Name: {this.state.beer.name}</h1>
                  <h3>{this.state.beer.tagline}</h3>

                  <hr />

                  <p>{this.state.beer.description}</p>
                  <p>Created By: {this.state.beer.contributed_by}</p>
                  <p>First Brewed: {this.state.beer.first_brewed}</p>
                  <p>Attenuation level: {this.state.beer.attenuation_level}</p>
                </Col>
                <Col md={4}>
                  <img className="beerImg" src={this.state.beer.image_url} alt={this.state.beer.name} />
                </Col>
              </Row>
              :
              <h3>Cargando...</h3>
          }
        </Container>
      </div>
    )
  }

}