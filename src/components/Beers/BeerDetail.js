import React, { Component } from 'react'
import BeerService from '../../service/BeerService'
import './../App.css'


import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'


class BeerDetails extends Component {
    constructor() {
        super()
        this.state = {
            beerDetails: []
        }
        this.beerService = new BeerService()
    }

    componentDidMount = () => {

        const id = this.props.match.params.beer_id

        this.beerService
            .oneBeer(id)
            .then(response => this.setState({ beerDetails: response.data }))
            .catch(err => console.log(err))
    }

    render() {

        return (

            <Container as="main">

                <Card>
                    <Card.Body>
                        <Card.Img variant="top" src={this.state.beerDetails.image_url} style={{ width: "50px", height: "150px" }} alt={this.state.beerDetails.name} />
                        <Card.Title>{this.state.beerDetails.name}</Card.Title>
                        <p>{this.state.beerDetails.tagline}</p>
                        <p>{this.state.beerDetails.first_brewed}</p>
                        <p>{this.state.beerDetails.attenuation_level}</p>
                        <p>{this.state.beerDetails.description}</p>
                        <p>{this.state.beerDetails.contributed_by}</p>
                    </Card.Body>
                </Card>

            </Container>
        )
    }
}

export default BeerDetails