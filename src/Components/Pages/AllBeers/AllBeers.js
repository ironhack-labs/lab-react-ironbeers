import BeerService from '../../../Services/Beers.service'
import './Allbeers.css'

import React, { Component } from 'react'
import { Button, Col, Row, Spinner } from 'react-bootstrap'
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
                <>
                    {this.state.beers.map((elm) =>

                        <Row key={elm._id}>
                            <Col xs={4}>
                                <center>
                                    <img className="beer-img" src={elm.image_url} alt={elm.name} />
                                </center>
                            </Col>
                            <Col xs={8}>
                                <h1>{elm.name}</h1>
                                <p>{elm.tagline}</p>
                                <p><strong>Created by: </strong>{elm.name}</p>
                                <Link to={`${elm._id}`}><Button variant="info">Details</Button></Link>
                            </Col>
                            <hr />
                        </Row>
                    )}

                </>
                :
                <center>
                    <Button variant="primary" disabled className='loading-spinner'>
                        <Spinner
                            as="span"
                            animation="grow"
                            size="sm"
                            role="status"
                            aria-hidden="true"
                        />
                        Loading...
                    </Button>
                </center>
        )
    }
}
