import React, { Component } from 'react'

import BeersServices from '../../services/index'

import Navbar from './../ui/navbar'

import { withRouter } from 'react-router';


import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'

class NewBeer extends Component {
    constructor() {
        super()
        this.state = {
            name: '',
            tagline: '',
            description: '',
            first_brewed: '',
            brewers_tips: '',
            attenuation_level: '',
            contributed_by: ''
        }
        this.beerServices = new BeersServices()
    }

    handleInputChange = e => {
        const { name, value } = e.target
        this.setState({ [name]: value })
    }

    handleFormSubmit = e => {
        e.preventDefault()
        this.beerServices
            .postNewBeer(this.state)
            .then(response => this.setState({ random: response.data }))
            .catch(err => console.log(err))

        this.props.history.push('/');

    }


    render() {
        console.log(this.state)
        return (
            <>
                <Navbar />
                <Container>
                    <Row style={{ height: '100vh' }}>
                        <Col xs={10}>
                            <h1>Create a beer!</h1>
                            <Form onSubmit={this.handleFormSubmit}>
                                <Form.Group>
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control onChange={this.handleInputChange} value={this.state.name} name="name" type="text" />
                                </Form.Group>

                                <Form.Group>
                                    <Form.Label>Tagline</Form.Label>
                                    <Form.Control onChange={this.handleInputChange} value={this.state.tagline} name="tagline" type="text" />
                                </Form.Group>

                                <Form.Group>
                                    <Form.Label>Description</Form.Label>
                                    <Form.Control onChange={this.handleInputChange} value={this.state.description} name="description" type="text" />
                                </Form.Group>

                                <Form.Group>
                                    <Form.Label>First Brewed</Form.Label>
                                    <Form.Control onChange={this.handleInputChange} value={this.state.first_brewed} name="first_brewed" type="text" />
                                </Form.Group>

                                <Form.Group>
                                    <Form.Label>Brewers Tips</Form.Label>
                                    <Form.Control onChange={this.handleInputChange} value={this.state.brewers_tips} name="brewers_tips" type="text" />
                                </Form.Group>

                                <Form.Group>
                                    <Form.Label>Attenuation level (qué es esto?)</Form.Label>
                                    <Form.Control onChange={this.handleInputChange} value={this.state.attenuation_level} name="attenuation_level" type="number" />
                                </Form.Group>

                                <Form.Group>
                                    <Form.Label>Contributed by</Form.Label>
                                    <Form.Control onChange={this.handleInputChange} value={this.state.contributed_by} name="contributed_by" type="text" />
                                </Form.Group>


                                <Button variant="dark" type="submit">Submit</Button>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </>
        )
    }
}

export default NewBeer
