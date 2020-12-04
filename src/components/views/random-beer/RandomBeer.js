import React, { Component } from 'react'
import Header from '../../allpages/Header'

import { Container, Card } from 'react-bootstrap'

class RandomBeer extends Component {
    constructor() {
        super()
        this.state = {
            beer: {}
        }
        this.beerService = new BeerService()
    }

    componentDidMount = () => {
        this.beerService
            .getRandomBeer()
            .then(res => this.setState({ beer: res.data }))
            .catch(err => console.log(err))
    }

    render() {
        return (
            <>
                <Header />
                <Container>
                    <Card className='onebeer-card'>
                        <Card.Img variant="top" src={this.state.beer.image_url} />
                        <Card.Body>
                            <Card.Title>{this.state.beer.name}</Card.Title>
                            <Card.Text>
                                <p>{this.state.beer.tagline}</p>
                                <p>{this.state.beer.description}</p>
                                <small>{this.state.beer.contributed_by}</small>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Container>
            </>
        )
    }
}

export default RandomBeer