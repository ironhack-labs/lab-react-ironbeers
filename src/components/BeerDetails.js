import { Component } from 'react'
import BeersService from '../../../service/BeersService'
import { Link } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap'
import React from 'react';


class BeerDetails extends Component {

    constructor() {
        super()
        this.state = {
            beer: undefined
        }
        this.beersService = new BeersService()
    }

    componentDidMount() {

        const { _id }  = this.props.match.params

        this.BeerService
            .getOneBeer(_id)
            .then(response => this.setState({ beer: response.data }))
            .catch(err => console.log(err))
    }

    render() {

        const { beer } = this.state

        return (
            <Container>
                {
                    !this.state.beer ? <h1>Cargando...</h1> :
                        <>
                            <Row >
                                <Col md={6}>
                                    <h3>{beer.name}</h3>
                                    <p>{beer.description}</p>
                                    <p>{beer.tagline}</p>
                                    <p>{beer.contributed_by}</p> 
                                    <Link to="/beers" >Volver</Link>
                                </Col>
                            </Row>
                        </>
                }
            </Container>
        )
    }
}

export default BeerDetails
