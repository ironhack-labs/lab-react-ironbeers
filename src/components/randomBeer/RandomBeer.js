import React, { Component } from 'react'
import BeerService from './../../service/beers.service'
import Header from './../header/Header'

import { Container, Row, Col } from 'react-bootstrap'
import './RandomBeer.css'


class RandomBeer extends Component {

    constructor() {
        super()
        this.state = {
            beer: []
        }
        this.beerService = new BeerService()
    }

    componentDidMount = () => {

        const beerId = this.props.match.params.beer_id
        this.beerService
            .getRandom(beerId)
            .then(res => this.setState({ beer: res.data }))
            .catch(err => console.log(err))
    }

    render() {

        return (
            <>
                
                <Header />
                
                <Container>
                    
                    <Row>
                        
                        <Col md={4} >
                            <img className="randomImg" src={this.state.beer.image_url} alt={this.state.beer.name}/>
                        </Col>

                        <Col md={4}>
                            <Container>
                                <Row className="justify-content-between">
                                    <h4>{this.state.beer.name}</h4>
                                    <p>{this.state.beer.attenuation_level}</p>
                                </Row>
                            </Container>
                            <Container>
                                <Row className="justify-content-between">
                                    <p>{this.state.beer.tagline}</p>
                                    <p><small><strong>{this.state.beer.first_brewed}</strong></small></p>
                            </Row>
                            </Container>
                            <p><strong>{this.state.beer.description}</strong></p>
                            <p>{this.state.beer.contributed_by}</p>
                        </Col>

                    </Row>

                </Container>
                
            </>
        )
    }
}



export default RandomBeer