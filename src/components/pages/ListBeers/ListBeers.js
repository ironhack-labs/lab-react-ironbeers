import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import './ListBeers.css'

import BeersService from '../../../service/beers-service'
import Header from '../../layout/header'

class AllBeers extends Component {
    constructor() {
        super()
        this.state = {
            beers: []
        }

        this.beersService = new BeersService()
    }

    componentDidMount() {
        this.loadBeers()
    }

    loadBeers() {
        this.beersService
            .getAllBeers()
            .then(response => this.setState({ beers: response.data}))
            .catch(err => console.log(err))
    }

    render() {

        const { beers } = this.state

        return(
            <Container>
            <Row>
                <Col lg={7} >
                <Header />
                    <h1>Beers list</h1>
                    {beers.map((elm, idx) => {
                        return(
                            <>
                            <article className="each-beer" style={{ marginTop: 30 }}>
                                <div>
                                    <img src={elm.image_url} />
                                </div>
                                <div>
                                    <h5>{elm.name}</h5>
                                    <p>{elm.tagline}</p>
                                    <p><strong>First Brewed:</strong> {elm.first_brewed}</p>
                                    <Link to={`/details/${elm._id}`} className="btn btn-primary" >Beer details</Link>
                                </div>
                            </article>
                                <hr/>
                            </>
                        )
                    })}
                </Col>
                </Row>

            </Container>
        )
    }
}

export default AllBeers