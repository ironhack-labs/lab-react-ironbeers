import React from 'react'
import './BeerDetails.css'
import { Component } from 'react'
import BeersService from './../../../../src/service/beers.service'
import { Link } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap'

class BeerDetails extends Component {

    constructor() {
        super()
        this.state = {
            beer: undefined
        }
        this.beerService = new BeersService()
    }

    componentDidMount() {
        // console.log(this.props.match.params.id)
        const _id = this.props.match.params.id

        this.beerService
            .getOneBeer(_id)
            .then(response => this.setState({ beer: response.data }))
            .catch(err => console.log(err))
    }

    render() {
        const { beer } = this.state

        return (
            !this.state.beer ? <h1>Loading...</h1> :
            <Container>
                <Row className="beer-details">
                    <Col md={6}>
                        <img src={beer.image_url} alt={beer.name}/>
                    </Col>
                    <Col md={6}>
                        <h1>{beer.name}</h1>
                        <p><em>{beer.tagline}</em></p>
                        <p>{beer.description}</p>
                        <p><b>First brewed: </b>{beer.first_brewed}</p>
                        <p><b>Attenuation level: </b>{beer.attenuation_level}</p>
                        <p><b>Contributed by: </b>{beer.contributed_by}</p>
                        <Link to={`/beers`} className="btn btn-dark btn-sm">Back to the beer page</Link>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default BeerDetails
