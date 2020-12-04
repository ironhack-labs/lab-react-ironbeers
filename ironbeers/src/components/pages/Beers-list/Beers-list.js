import React, { Component } from 'react'
import BeerService from './../../../service/beers.service'
import BeerCard from './BeersCard'

import { Container, Row, Col, Form } from 'react-bootstrap'

class BeerList extends Component {

    constructor() {
        super()

        this.state = {

            beers: [],
            search: ''

        }

        this.beerService = new BeerService()
    }

    componentDidMount() {

        this.beerService
            .getAllBeers()
            .then(res => this.setState({ beers: res.data }))
            .catch(err => console.log(err))
    }

    handleInputChange = e => {

        if (!e.target.value) {

            this.setState({search: ''})
            this.componentDidMount()

        } else {

        this.setState({ [e.target.name]: e.target.value })

        this.beerService
            .searchBeers(this.state.search)
            .then(res => this.setState({beers: res.data}))
            .catch(err => console.log(err))

        }
    }

    render() {

       console.log(this.state.beers)

        return (
            <>
                <Container>
                    <h1>ESTAS SON LAS BIRRAS</h1>

                    <Row>

                        <Col md={{ span: 10, offset: 1 }}>
                            <Form>
                                <Form.Group controlId="name">
                                    <Form.Label>Filtro</Form.Label>
                                    <Form.Control type="text" name="search" value={this.state.search} onChange={this.handleInputChange} />
                                </Form.Group>
                            </Form>
                        </Col>

                        {this.state.beers.map(elm => <BeerCard key={elm._id} {...elm} />)}

                    </Row>

                </Container>

            </>
        )

    }

}

export default BeerList