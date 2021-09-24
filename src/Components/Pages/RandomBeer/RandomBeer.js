import React, { Component } from 'react'
import { Col, Row } from 'react-bootstrap'
import BeerService from '../../../Services/Beers.service'


export default class BeersDetails extends Component {
    constructor() {
        super()
        this.state = {
            beer: null
        }
        this.BeerService = new BeerService()
    }


    componentDidMount() {

        this.BeerService.getRandomBeer()
            .then(res => {
                console.log(res.data);
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
                {
                    this.state.beer ?
                        <Row>
                            <Col>
                                <img className="beer-id-logo" src={this.state.beer.image_url} alt={this.state.beer.name} />
                            </Col>
                            <Col>
                                <h1>Beer: {this.state.beer.name}</h1>
                                <h3>Tagline: {this.state.beer.tagline}</h3>
                                <hr />
                                <p>Tips: {this.state.beer.first_brewed}</p>
                                <p>Attenuation Level: {this.state.beer.attenuation_level}</p>
                                <p>Description: {this.state.beer.description}</p>
                                <p>Contributed by: {this.state.beer.contributed_by}</p>
                            </Col>
                        </Row>
                        :
                        <h3>Cargando...</h3>
                }
            </div>

        )
    }
}