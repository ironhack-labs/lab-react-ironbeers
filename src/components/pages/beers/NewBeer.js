import React from 'react'
import { Component } from 'react'
import { Form, Button, Container, Row, Col } from 'react-bootstrap'
import BeersService from './../../../../src/service/beers.service'

class NewBeer extends Component {

    constructor() {
        super()
        this.state = {
            name: '',
            tagline: '',
            description: '',
            first_brewed: '',
            brewers_tips: '',
            attenuation_level: 0,
            contributed_by: ''
        }

        this.beerService = new BeersService()
    }

    handleInputChange(e) {
        const { name, value } = e.target
        this.setState({ [name]: value })
    }

    handleSubmit(e) {
        e.preventDefault()

        this.beerService
            .createBeer(this.state)
            .then(newBeer => {
                alert(newBeer.data.message)
            })
            .catch(err => console.log(err))
    }
    render() {
        return (
            <Container>
                <Row>
                    <Col md={6}>
                        <Form onSubmit={e => this.handleSubmit(e)} className="justify-content-center">
                            <Form.Group controlId="title">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" value={this.state.name} onChange={e => this.handleInputChange(e)} name="name" />
                            </Form.Group>

                            <Form.Group controlId="description">
                                <Form.Label>Tagline</Form.Label>
                                <Form.Control type="text" value={this.state.tagline} onChange={e => this.handleInputChange(e)} name="tagline" />
                            </Form.Group>

                            <Form.Group controlId="description">
                                <Form.Label>Description</Form.Label>
                                <Form.Control type="text" value={this.state.description} onChange={e => this.handleInputChange(e)} name="description" />
                            </Form.Group>

                            <Form.Group controlId="first_brewed">
                                <Form.Label>First brewed</Form.Label>
                                <Form.Control type="text" value={this.state.first_brewed} onChange={e => this.handleInputChange(e)} name="first_brewed" />
                            </Form.Group>

                            <Form.Group controlId="brewers_tips">
                                <Form.Label>Brewers Tips</Form.Label>
                                <Form.Control type="text" value={this.state.brewers_tips} onChange={e => this.handleInputChange(e)} name="brewers_tips" />
                            </Form.Group>

                            <Form.Group controlId="attenuation_level">
                                <Form.Label>Attenuation level</Form.Label>
                                <Form.Control type="number" value={this.state.attenuation_level} onChange={e => this.handleInputChange(e)} name="attenuation_level" />
                            </Form.Group>

                            <Form.Group controlId="contributed_by">
                                <Form.Label>Contributed by</Form.Label>
                                <Form.Control type="text" value={this.state.contributed_by} onChange={e => this.handleInputChange(e)} name="contributed_by" />
                            </Form.Group>

                            <Button variant="dark" style={{ width: '100%' }} type="submit">Create a new beer</Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default NewBeer