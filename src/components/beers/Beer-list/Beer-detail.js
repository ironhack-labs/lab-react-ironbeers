import React, { Component } from 'react'
import BeerService from '../../../service/BeerService'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Link } from 'react-router-dom'

class BeerDetails extends Component {
    constructor() {
        super()
        this.state = {
            beerDetails: []
        }
        this.BeerService = new BeerService()
    }

    componentDidMount = () => {
        const id = this.props.match.params.beer_id
        this.BeerService
            .getOneBeer(id)
            .then(response => this.setState({ beerDetails: response.data }))
            .catch(err => console.log(err))
    }

    render() {
        return (

            !this.state.beerDetails ? <h3>¿Te esperas?</h3> :

                <Container as="main">

                    <h1>{this.state.beerDetails.name}</h1>

                    <Row>
                        <Col md={{ span: 5, offset: 1 }}>
                            <img src={this.state.beerDetails.image_url} alt="beer" />
                            <p><b>tagline:</b> {this.state.beerDetails.tagline}</p>
                            <hr></hr>
                            <p><b>description:</b> {this.state.beerDetails.description}</p>
                            <p><b>first-brewed:</b> {this.state.beerDetails.first_brewed}</p>
                            <hr></hr>
                            <Link className="btn btn-dark btn-md" to='/beers'>Volver</Link>
                        </Col>

                    </Row>

                </Container>

        )

    }
}

export default BeerDetails