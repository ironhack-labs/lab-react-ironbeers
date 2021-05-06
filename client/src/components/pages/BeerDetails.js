import { Component } from 'react'
import React from 'react'
import BeersService from '../../service/beers.service'
import { Link } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap'
import './BeerDetails.css'
import Header from '../layout/Header'

class BeerDetails extends Component {

    constructor() {
        super()
        this.state = {
            beer: undefined
        }
        this.beerService = new BeersService()
    }

    componentDidMount() {

        const { beer_id } = this.props.match.params

        this.beerService
            .getOneBeer(beer_id)
            .then(response => this.setState({ beer: response.data }))
            .catch(err => console.log(err))
    }

    render() {

        const { beer } = this.state

        return (

            <Container  >
                <Header />
                {
                    !this.state.beer ? <h1>Cargando...</h1> :

                        <>

                            <Row className="justify-content-between">
                                <Col md={4} className=".beer-details">
                                    <img src={beer.image_url} alt={beer.name} style={{ width: '100%' }} />
                                </Col>
                                <Col md={6}>

                                    <h3>{beer.name}</h3>
                                    <p>{beer.tagline}</p>
                                    <p>{beer.attenuation_level}</p>
                                    <p>{beer.first_brewed}</p>
                                    <p>{beer.description}</p>
                                    <p>{beer.contibuted_by}</p>

                                </Col>
                            </Row>
                        </>
                }

            </Container>
        )
    }
}

export default BeerDetails