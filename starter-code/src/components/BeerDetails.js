import React, { Component } from 'react'
import BeerServices from '../services/beers.services'
import './BeerDetails.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import NavHome from './NavBar'
import { Link } from 'react-router-dom'

class BeerDetails extends Component {

    constructor(props) {
        super(props)
        this.state = { beer: {} }
        this.services = new BeerServices()
    }

    componentDidMount = () => this.getBeerDetails()

    getBeerDetails = () => {
        this.services.getBeerDetails(this.props.match.params.id)
            .then(theBeer => this.setState({ beer: theBeer }))
            .catch(err => console.log(err))
    }

    render() {

        return (
            <Container className="beer-details">
            <NavHome></NavHome>
                <h1>{this.state.beer.title}</h1>
                <Row>
                    <Col md={{ span: 4, offset: 1 }}>
                        <h3>{this.state.beer.name}</h3>
                        <hr></hr>
                        <p>Lema:{this.state.beer.tagline}</p>
                        <p>Lanzamiento:{this.state.beer.first_brewed}</p>
                        <p>Atenuacion:{this.state.beer.attenuation_level}</p>
                        <p>Descripcion:{this.state.beer.description}</p>
                        <p>Creador:{this.state.beer.contributed_by}</p>
                        <Button as="div" variant="dark" size="sm">
                    <Link to="/beers">Volver</Link>
                </Button>
                    </Col>
                    <Col md={{ span: 5, offset: 1 }}>
                        <img src={this.state.beer.image_url} alt=""></img>
                    </Col>
                </Row>
                
            </Container>
        )
    }
}

export default BeerDetails