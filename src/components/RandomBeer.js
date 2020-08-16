import React, { Component } from 'react'
import Axios from 'axios';
import NaviBar from './Navbar';
import {Container, Row, Col} from 'react-bootstrap';


export default class RandomBeer extends Component {
    state = {
        beerID: '',
        beer: {}
    }

    componentDidMount(){
        Axios 
        .get(`https://ih-beers-api2.herokuapp.com/beers/random`)
        .then(responseFromApi => {
            this.setState({beer: responseFromApi.data, beerID: responseFromApi.data._id}) //Unica diferencia entre DetailedBeer.js 
            //y esta es que cambia la URL del get de Axios, por lo que el segundo argumento
            //de setState lo cambio por el ID de la respuesta
        })
        .catch(err => console.log(err))
    }
    render() {
        return (
            <div>
                <NaviBar />
                <Container className="mt-5">
                    <Row>
                    <Col lg={12}>
                        <div className="beer-details---wrapper">
                        <img
                            src={this.state.beer.image_url}
                            alt={this.state.beer.name}
                        />
                        <div className="d-flex align-items-center">
                            <div className="beer-details---col">
                            <h1>{this.state.beer.name}</h1>
                            <p className="beer-details---tagline">
                                {this.state.beer.tagline}
                            </p>
                            </div>
                            <div className="beer-details---col text-right">
                            <p className="beer-details---attenuation-level">
                                {this.state.beer.attenuation_level}
                            </p>
                            <p className="beer-details---first-brewed">
                                {this.state.beer.first_brewed}
                            </p>
                            </div>
                        </div>
                        <p className="beer-details---description">
                            {this.state.beer.description}
                        </p>
                        <p className="beer-details---contributor">
                            {this.state.beer.contributed_by}
                        </p>
                        </div>
                    </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}
