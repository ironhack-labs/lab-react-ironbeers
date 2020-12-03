import React, { Component } from 'react'
import BeerService from './../../../service/beers.service'
import './Beer-details.css'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

class BeerDetails extends Component {

    constructor() {
        super()
        this.state = {
            beer: undefined
        }
        this.beerService = new BeerService()
    }

    componentDidMount = () => {

        const beer_id = this.props.match.params.id

        this.beerService
            .getOneBeer(beer_id)
            .then(res => this.setState({ beer: res.data }))
            .catch(err => console.log(err))
    }

    render() {

        return (
            <Container className="beer-details">
                {this.state.beer
                    ?
                    <>
                        <h1>Detalles {this.state.beer.name}</h1>
                        <Row>
                            <Col md={{ span: 6, offset: 1 }} >
                                <img src={this.state.beer.image_url} alt={this.state.beer.name} />
                            </Col>
                            <Col md={3}>
                                <h3>Detalles</h3>
                                <p>{this.state.beer.description}</p>
                                <hr />
                                <p>{this.state.beer.tagline}</p>
                                <p>Nivel: {this.state.beer.attenuation_level}</p>
                                <Link to="/beers" className="btn btn-sm btn-primary">Volver</Link>
                            </Col>
                        </Row>
                    </>
                    :
                    <p>Cargando...</p>
                }

            </Container>
        )
    }
}

export default BeerDetails