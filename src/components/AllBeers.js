import React, { Component } from 'react';
import { Form, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import axios from 'axios'


class AllBeers extends Component {
    constructor() {
        super()
        this.state = {
            beers: undefined,
            search: ""
        }
    }

    handleInputChange(e) {
        e.preventDefault()
        console.log(e.target)
        const { name, value } = e.target
        this.setState({ [name]: value })
        this.searchBeer()
    }

    componentDidMount() {
        axios.get('https://ih-beers-api2.herokuapp.com/beers')
            .then(response => this.setState({ beers: response.data }))
            .catch(err => console.log(err))
    }

    searchBeer() {
        axios
            .get(`https://ih-beers-api2.herokuapp.com/beers/search?q=${this.state.search}`)
            .then(response => this.setState({ beers: response.data }))
            .catch(err => console.log(err))
    }

    render() {
        return (
            <>
                <Form.Group controlId="search">
                    <Form.Control type="text" value={this.state.search} onChange={e => this.handleInputChange(e)} name="search" />
                </Form.Group>

                {
                    !this.state.beers
                        ?
                        <p>Loading...</p>
                        :
                        this.state.beers.map((elm, index) =>
                            <Row key={index}>
                                <Col md={4}>
                                    <img src={elm.image_url}></img>
                                </Col>
                                <Col md={6}>
                                    <Link to={`/beers/details/${elm._id}`}>
                                        <h2>{elm.name}</h2>
                                    </Link>
                                    <p>{elm.tagline} {elm.contributed_by}</p>
                                </Col>
                                
                            </Row>
                        )
                }
            </>
        )
    }

}

export default AllBeers