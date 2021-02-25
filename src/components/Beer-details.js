import React from 'react'
import { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Navigation from './Navbar'

import { Link } from 'react-router-dom'
import BeersService from './../service/beers.service'


class BeerDetails extends Component {

    constructor() {
        super()
        this.state = {
            beer: undefined
        }
        this.BeersService = new BeersService()
    }


    componentDidMount() {

        console.log(this.props.match.params.id)

        const beer_id = this.props.match.params.id

        this.BeersService
            .getBeer(beer_id)
            .then(response => this.setState({ beer: response.data }))
            .catch(err => console.log(err))
    }

    render() {
        return (
            <>
                <Navigation />
                <Container as="section">

                    <Row>
                        <Col md={{ span: 6, offset: 1 }}>
                            <h1>{this.state.beer?.name}</h1>
                            <hr />
                            <p>{this.state.beer?.description}</p>
                            <hr />
                            <p><strong>Tag line:</strong> {this.state.beer?.tagline} metros | <strong>First brewed:</strong> {this.state.beer?.first_brewed} | <strong>Contributed by :</strong> {this.state.beer?.contributed_by}</p>
                            <Link to="/beers" className="btn btn-dark">Volver al listado</Link>
                        </Col>

                        <Col md={4}>
                            <h3>Fotos</h3>
                            <img style={{ width: '50%', marginBottom: 20 }} src={this.state.beer?.image_url} alt={this.state.beer?.title} />
                        </Col>
                    </Row>
                </Container>
            </>
        )
    }
}


export default BeerDetails