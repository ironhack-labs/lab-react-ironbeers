import React, { Component } from 'react'
import Service from '../../service/Beer.service'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'


class BeerRandom extends Component {

    constructor() {
        super()
        this.state = { beer: {} }
        this._service = new Service()
    }


    componentDidMount = () => {
        this._service.getRandomBeer()
            .then(theBeer => this.setState({ beer: theBeer.data }))
            .catch(err => console.log(err))
    }



    render() {
        return (
            <Container className="beer-details">
                <section>
                    <Row>
                        <Col md={6}>
                            <h1>Detalles de {this.state.beer.name}</h1>
                            <p>{this.state.beer.attenuation_level}</p>
                            <br/>
                            <p>{this.state.beer.first_brewed}</p>
                            <br/>
                            <p>{this.state.beer.description}</p>
                            <br/>
                            <p>{this.state.beer.tagline}</p>
                            <br/>
                            <p><strong>Descripción:</strong> {this.state.beer.description}</p>
                            <hr></hr>
                            <Link to="/beers" className="btn btn-danger">Volver</Link>
                        </Col>
                        <Col md={{ span: 4, offset: 2 }}>
                            <img src={this.state.beer.image_url} alt={this.state.beer.name}></img>
                        </Col>
                    </Row>
                </section>
            </Container>
        )
    }

}

export default BeerRandom