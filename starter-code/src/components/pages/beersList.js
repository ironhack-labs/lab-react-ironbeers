import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import BeersServices from '../../services/beers.services'
import NavBar from '../ui/NavBar'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './pages.css'

class BeersList extends Component {

    constructor() {
        super()
        this.state = {
            beers: [],
        }
        this.services = new BeersServices()
    }

    componentDidMount = () => this.getAllBeers()

    getAllBeers = () => {
        this.services.getAllBeers()
            .then(allBeers => this.setState({ beers: allBeers }))
            .catch(err => console.log(err))
    }

    render() {
        return (
            <>
                <NavBar />
                {this.state.beers.map(elm =>
                    <Container className="beer-details" key={elm._id}>
                        <Row>
                            <Col md={{ span: 4, offset: 1 }}>
                                <img src={elm.image_url} alt={elm.name} />
                            </Col>
                            <Col md={{ span: 5, offset: 1 }}>
                                <Link to={`/details/${elm._id}`}><h2>{elm.name}</h2></Link>
                                <p>{elm.tagline}</p>
                                <small><strong>Contributed by:</strong> {elm.contributed_by}</small>
                            </Col>
                        </Row>
                    </Container>
                )}
            </>
        )
    }
}

export default BeersList