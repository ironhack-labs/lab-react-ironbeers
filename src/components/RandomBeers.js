import React, { Component } from 'react'
import BeersService from './../service/beers.service'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

class RandomBeers extends Component {

    constructor() {
        super()
        this.state = {
            beers: []
        }
        this.beersService = new BeersService()
    }

    componentDidMount = () => {

        const beersId = this.props.match.params.beersId

        this.beersService
            .getRandomBeer(beersId)
            .then(res => this.setState({ beers: res.data }))
            .catch(err => console.log(err))
    }

    render() {

        return (
            <Container className="beers-details">
                    <>
                        <h1>Nombre {this.state.beers.name}</h1>
                        <Row>
                            <Col md={{ span: 6, offset: 1 }} >
                                <img src={this.state.beers.image_url} alt={this.state.beers.name} style={{ width: "100px"}} />
                            </Col>
                            <Col md={3}>
                                <h3>Tagline</h3>
                                <p>{this.state.beers.tagline}</p>
                                <hr />
                            <p>First brewed {this.state.beers.first_brewed} </p>
                            <p>Attenuation level: {this.state.beers.attenuation_level} </p>
                            <p>Description: {this.state.beers.description} </p>
                            <p>Contributed by: {this.state.beers.contributed_by} </p>
                             
                            </Col>
                        </Row>
                    </>

            </Container>
        )
    }
}

export default RandomBeers
