import React, { Component } from 'react'
import BeerServices from '../services/beers.services'
import './BeerDetails.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import NavHome from './NavBar'

class BeerDetails extends Component {

    constructor(props) {
        super(props)
        this.state = { beer: {} }
        this.services = new BeerServices()
    }

    componentDidMount = () => this.getRandomBeer()

    getRandomBeer = () => {
        this.services.getRandomBeer()
            .then(theRandomBeer => this.setState({ beer: theRandomBeer }))
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