import React, { Component } from 'react'
import { Col, Container, Row, Spinner } from 'react-bootstrap';
import BeersService from '../../services/BeersServices';


class RandomBeer extends Component {

    constructor() {
        super();
        this.state = {
            beer: null
        }
        this.BeersService = new BeersService();
    }

    componentDidMount = () => {
        this.BeersService.getRandomBeer()
            .then(res => {
                this.setState({
                    ...this.state,
                    beer: res.data
                })
            })
            .catch(err => console.error(err))
    }

    render() {
        return (
            <div>
                {this.props.children}
                <Container>
                    {
                        this.state.beer ?
                            <Row>
                                <Col className='random' md={4} >
                                    <img className='image-details' src={this.state.beer.image_url} alt={this.state.beer.name} />
                                </Col>
                                <Col className='random' md={6}>
                                    <h1>Nombre: {this.state.beer.name}</h1>
                                    <h3>{this.state.beer.tagline}</h3>
                                    <p>{this.state.beer.description}</p>
                                    <p>Creado por: {this.state.beer.contributed_by}</p>
                                    <p>{this.state.beer.first_brewed}</p>
                                    <p> {this.state.beer.attenuation_level}</p>
                                </Col>
                            </Row>
                            :
                            <Spinner className='spinner' animation="border" />
                    }
                </Container>
            </div>
        )
    }

}

export default RandomBeer
