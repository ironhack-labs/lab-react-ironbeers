import React, { Component } from 'react'
import BeerService from './../../service/beer.service'
import { Container, Row, Col } from 'react-bootstrap'

import { Link } from 'react-router-dom'

class BeerDetails extends Component {

    constructor() {
        super()
        this.state = {
            beer: undefined
        }
        this.BeerService = new BeerService()
    }

    componentDidMount = () => {

        const beer_id = this.props.match.params.coaster_id

        this.BeerService
            .getCoaster(beer_id)
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
                                <Link to="/beers" className="btn btn-sm btn-dark">Volver</Link>
                            </Col>
                        </Row>
                    </>
                    :
                    <h1>Cargando</h1>
                }

            </Container>
        )
    }
}

export default BeerDetails