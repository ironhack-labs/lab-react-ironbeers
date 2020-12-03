import React, { Component } from 'react'
import BeersServices from './../../../service/beer.service'
import './Beer-Details.css'
import NavBar from '../Navbar/Navbar'

import { Container, Row, Col } from 'react-bootstrap'

import { Link } from 'react-router-dom'

class BeerDetails extends Component {

    constructor() {
        super()
        this.state = {
            beer: []
        }
        this.beerServices = new BeersServices()
    }

    componentDidMount = () => {

        const beer_id = this.props.match.params.beer_id

        this.beerServices
            .getOneBeer(beer_id)
            .then(res => this.setState({ beer: res.data }))
            .catch(err => console.log(err))
    }

    render() {

        return (

            
        
            <Container className="beer-details">
                       <NavBar />
                <>
                        <h1>Detalles {this.state.beer.name}</h1>
                        <Row>
                            <Col md={{ span: 6, offset: 1 }} >
                                <img src={this.state.beer.image_url} alt={this.state.beer.name} />
                            </Col>
                            <Col md={3}>
                            <h3>Detalles</h3>
                            <hr></hr>
                            <p>{this.state.beer.tagline}</p>
                            <p>{this.state.beer.first_brewed}</p>
                            <p>{this.state.beer.attenuation_level}</p>
                            <p>{this.state.beer.description}</p>
                            <small>{this.state.beer.contributed_by}</small>
                            <br></br>

                                <Link to="/beers" className="btn btn-sm btn-dark">Volver</Link>
                            </Col>
                        </Row>
                    </>
 

            </Container>
        )
    }
}

export default BeerDetails