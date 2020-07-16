import React, { Component } from 'react'
import BeerService from '../../service/BeerService'
import './../App.css'


import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'


class BeerRandom extends Component {
    constructor() {
        super()
        this.state = {
            randomBeer: []
        }
        this.beerService = new BeerService()
    }

    componentDidMount = () => {

        const id = this.props.match.params.beer_id

        this.beerService
            .getRandomBeer()
            .then(response => this.setState({ randomBeer: response.data }))
            .catch(err => console.log(err))
    }

    render() {

        return (

            <Container as="main">

                <Card>
                    <Card.Body>
                        <Card.Img variant="top" src={this.state.randomBeer.image_url} style={{ width: "50px", height: "150px" }} alt={this.state.randomBeer.name} />
                        <Card.Title>{this.state.randomBeer.name}</Card.Title>
                        <p>{this.state.randomBeer.tagline}</p>
                        <p>{this.state.randomBeer.first_brewed}</p>
                        <p>{this.state.randomBeer.attenuation_level}</p>
                        <p>{this.state.randomBeer.description}</p>
                        <p>{this.state.randomBeer.contributed_by}</p>
                    </Card.Body>
                </Card>

            </Container>
        )
    }
}

export default BeerRandom