import React, { Component } from 'react'
import BeerService from '../../../service/beers-service'
import Header from '../../shared/Header'

import { Container, Card } from 'react-bootstrap'
import './SingleBeer.css'

class SingleBeer extends Component {
  constructor (props) {
    super(props)
    this.state = {
      beer: {}
    }
    this.beerService = new BeerService()
  }

  componentDidMount = () => {
    const beerId = this.props.match.params.id
    
    this.beerService
      .getOneBeer(beerId)
      .then(res => this.setState({ beer: res.data }))
      .catch(err => console.log(err))
  }

  render() {
    return (
      <>
        <Header />
        <Container>
          <Card className='single-beer-card'>
            <Card.Img variant="top" src={this.state.beer.image_url} />
            <Card.Body>
              <Card.Title>{ this.state.beer.name }</Card.Title>
              <Card.Text>
                <p>{ this.state.beer.tagline }</p>
                <p>{this.state.beer.description}</p>
                <small>{ this.state.beer.contributed_by }</small>
              </Card.Text>
            </Card.Body>
          </Card>
        </Container>
      </>
    )
  }
}

export default SingleBeer