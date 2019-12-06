import React, { Component } from 'react'
import Service from '../service/beers.service'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'


class BeerRandom extends Component {

    constructor() {
        super()
        this.state = {
            beer: {}
        }
        this._service = new Service()
    }

    componentDidMount = () => this.updateBeerRandom()

    updateBeerRandom = () => {
        this._service.getRandomBeer()
            .then(randomFromDB => this.setState({ beer: randomFromDB.data }))
            .catch(err => console.log("Error", err))
    }


    render() {
        return (
            <Container className="beer-details">
                <section>
                    <Row>
                        <Col md={6}>
                            <img src={this.state.beer.image_url} alt={this.state.beer.name} className="random"/>
                            <h1>{this.state.beer.name}</h1>
                            <p>{this.state.beer.tagline}</p>
                            <p>{this.state.beer.first_brewed}</p>
                            <p>{this.state.beer.attenuation_level}</p>
                            <p>{this.state.beer.description}</p>
                            <p>{this.state.beer.contributed_by}</p>


                            <Link to="/" className="btn btn-dark">Volver</Link>
                        </Col>
                    </Row>
                </section>
            </Container>
        )
    }

}


export default BeerRandom 