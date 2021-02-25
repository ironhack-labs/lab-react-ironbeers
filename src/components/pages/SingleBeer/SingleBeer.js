import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import './SingleBeer.css'

import BeersService from '../../../service/beers-service'

import Header from '../../layout/header'

class SingleBeer extends Component {
    constructor() {
        super()
        this.state = {
            beer: ""
        }
        this.beersService = new BeersService()
    }

    componentDidMount() {
        const beer_id = this.props.match.params.beer_id

        this.beersService
            .getSingleBeer(beer_id)
            .then(response => this.setState({ beer: response.data }))
            .catch(err => console.log(err))
    }


    render() {

        const { beer } = this.state

        return(
            <Col>

                <Header />
                <article className="beer-details">
                    <img src={beer.image_url} />
                    <h4>{beer.name}</h4>
                    <p>{beer.attenuation_level}</p>
                    <p>{beer.tagline}</p>
                    <p>{beer.description}</p>
                    <p>{beer.contributed_by}</p>
                </article>

            </Col>

        )
    }
}

export default SingleBeer