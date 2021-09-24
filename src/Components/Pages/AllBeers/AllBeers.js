import BeerService from '../../../Services/Beers.service'
import './Allbeers.css'

import React, { Component } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default class AllBeers extends Component {
    constructor() {
        super()
        this.state = {
            beers: null,
        }
        this.BeerService = new BeerService()
    }

    displayAll() {
        this.BeerService
            .getBeers()
            .then(res => {
                this.setState({
                    ...this.state,
                    beers: res.data,
                })
            })
            .catch(err => console.error(err))
    }

    componentDidMount = () => {
        this.displayAll()
    }


    render() {
        return (
            this.state.beers ?
                <center>
                    <Link to="/random-beer">Get a random beer</Link>
                    {this.state.beers.map((elm) =>

                        <Row key={elm._id}>
                            <Col>
                                <img className="beer-img" src={elm.image_url} alt={elm.name} />
                            </Col>
                            <Col>
                                <h1>{elm.name}</h1>
                                <p>{elm.tagline}</p>
                                <p><strong>Created by: </strong>{elm.name}</p>
                                <Link to={`${elm._id}`}>Details</Link>
                            </Col>
                            <hr />
                        </Row>
                    )}

                </center>
                :
                <p>...Cargando</p>
        )
    }
}
