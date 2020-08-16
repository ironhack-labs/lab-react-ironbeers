import React, { Component } from 'react'
import Axios from 'axios';
import NaviBar from './Navbar';
import {Container, Row, Col} from 'react-bootstrap';


export default class DetailedBeer extends Component {
    state = {
        beerID: '',
        beer: {}
    }

    componentDidMount(){
        const {id} = this.props.match.params; //IT-4. 4.2.
        Axios //IT-4, 4.3
        .get(`https://ih-beers-api2.herokuapp.com/beers/${id}`)
        .then(responseFromApi => {
            this.setState({beer: responseFromApi.data, beerID: id})
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
