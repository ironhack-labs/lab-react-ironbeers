import React, { Component } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import BeerService from '../../services/beers.service'

export default class BeerDetails extends Component {

  constructor(){
    super();
    this.state = {
      beers: []
    }
    this.BeerService = new BeerService()
  }

  componentDidMount(){
    const {id} = this.props.match.params
    this.BeerService.getOneBeer(id)
    .then(res => {console.log(res)
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
