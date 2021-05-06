import React, { Component } from 'react';
import { Form, Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import axios from 'axios'
import './Beers.css'


class Beers extends Component {
    constructor() {
        super()
        this.state = {
            beersArray: undefined,
            search: ""
        }
    }

    componentDidMount() {
        axios.get('https://ih-beers-api2.herokuapp.com/beers')
            .then(response => this.setState({ beersArray: response.data }))
            .catch(err => console.log(err))
    }

    handleInputChange(e) {
        e.preventDefault()
        console.log(e.target)
        const { name, value } = e.target
        this.setState({ [name]: value })
        this.filterBeer()
    }

    filterBeer() {
        axios
            .get(`https://ih-beers-api2.herokuapp.com/beers/search?q=${this.state.search}`)
            .then(response => this.setState({ beersArray: response.data }))
            .catch(err => console.log(err))
    }

    render() {
        return (
            <Container>
                <Row>
                    <Col md={8}>
                        <Form.Group controlId="search">
                            <Form.Control type="text" value={this.state.search} onChange={e => this.handleInputChange(e)} name="search" />
                        </Form.Group>

                    </Col>
                </Row>
                {!this.state.beersArray ? <h1>Cargando...</h1> :
                    this.state.beersArray.map((elm, index) =>
                        <Row key={index} className="Beers" >
                            <Col md={3} className="text-center">
                                <img src={elm.image_url}></img>
                            </Col>
                            <Col md={5}>
                                <Link to={`/beers/details/${elm._id}`}> <h2>{elm.name}</h2></Link>
                                <p>{elm.tagline}</p>
                                <p>{elm.contributed_by}</p>
                            </Col>
                            <hr />
                        </Row>
                    )
                }
            </Container>
        )
    }

}

export default Beers