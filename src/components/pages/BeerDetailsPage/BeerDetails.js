import React, { Component } from 'react'
import BeersService from '../../../services/beers.services'
import { Container, Row, Col } from 'react-bootstrap'
import './BeerDetails.css'

class BeerDetails extends Component {

    constructor() {
        super()
        this.state = {
            beer: undefined
        }
        this.beersService = new BeersService()
        
    }


    componentDidMount() {

        const { beer_id } = this.props.match.params

        this.beersService
            .getOneBeer(beer_id)
            .then(response => this.setState({ beer: response.data }))
            .catch(err => console.log(err))
    }


    render() {

        return (

            <Container>

                {!this.state.beer
                    ?
                    <h3>Loading...</h3>
                    :
                    <Row className="justify-content-around beer-details">
                        <Col md={6}>
                            <h1>{this.state.beer.name}</h1>
                            <img src={this.state.beer.image_url}/>
                        </Col>
                        <Col md={6}>
                            <p>{this.state.beer.tagline}</p>
                            <p>{this.state.beer.first_brewed}</p>
                            <p>{this.state.beer.attenuation_level}</p>
                            <p>{this.state.beer.description}</p>
                            <p>{this.state.beer.contributed_by}</p>
                        </Col>
                    </Row>
                }

            </Container>
        )
    }
}


export default BeerDetails