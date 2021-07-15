import axios from 'axios'
import React, { Component } from 'react'
import { Form, Button, Container, Row, Col } from 'react-bootstrap'



class CreateBeers extends Component {
    constructor() {
        super()
        this.state = {
            name: '',
            tagline: '',
            first_brewed: '',
            description: '',
            brewers_tips: '',
            attenuation_level: 0,
            contributed_by: ''
        }
    }

    handleInputChange(e) {
        const { name, value } = e.target
        console.log(name, value)
        this.setState({ [name]: value })
    }

    handleSubmit(e) {
        e.preventDefault()
        console.log(this.state)
        axios
            .post('https://ih-beers-api2.herokuapp.com/beers/new', this.state)
            .then(response => console.log(response))
            .catch(err => console.log(err))
    }

    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        <Form onSubmit={e => this.handleSubmit(e)}>
                            <Form.Group controlId="title">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" value={this.state.name} onChange={e => this.handleInputChange(e)} name="name" />
                            </Form.Group>

                            <Form.Group controlId="tagline">
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
                                <Form.Label>Brewers tips</Form.Label>
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

                            <Button variant="info" style={{ width: '100%' }} type="submit">Create new beer</Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        )
    }

}

export default CreateBeers

