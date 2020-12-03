import React, { Component } from 'react'
import beersService from './../../service/service'


import Loader from './../shared/Spinner/Loader'

import { Container, Row, Col } from 'react-bootstrap'
import './beerList.css'
import { Link } from 'react-router-dom'

class beerDetails extends Component {

    constructor() {
        super()
        this.state = {
            beer: undefined
        }
        this.beersService = new beersService()
    }

    componentDidMount = () => {

        const beer_id = this.props.match.params.id

        this.beersService
            .getBeer(beer_id)
            .then(res => this.setState({ beer: res.data }))
            .catch(err => console.log(err))
    }

    render() {
        console.log(this.props.match.params.id)

        return (
            <Container className="beer-details">
                {this.state.beer
                    ?
                    <>
                        <h1>Detalles {this.state.beer.name}</h1>
                        <Row>
                            <Col md={{ span: 6, offset: 1 }} >
                                <img className="beerimg" src={this.state.beer.image_url} alt={this.state.beer.name} />
                            </Col>
                            <Col md={3}>
                                <h3>Detalles</h3>
                                <p>{this.state.beer.description}</p>
                                <hr />
                              
                                <Link to="/beers" className="btn btn-sm btn-dark">Volver</Link>
                            </Col>
                        </Row>
                    </>
                    :
                    <Loader />
                }

            </Container>
        )
    }
}

export default beerDetails
