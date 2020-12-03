import React, { Component } from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import beerApiHandler from '../api-handler'
import NavBar from './NavBar'

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
        this.beerApi = new beerApiHandler()
    }

    handleInputs = e => this.setState({ [e.target.name]: e.target.value })

    handleSubmit = e => {
        e.preventDefault()
        this.beerApi
            .createBeer(this.state)
            .then(() => this.setState({ name: '', tagline: '', description: '', first_brewed: '', brewers_tips: '', attenuation_level: 0, contributed_by: '' }))
            .catch(err => console.log(err))
    }

    render() {
        return (
            <Container>
                <NavBar />
                <Row>
                    <Col md={{ span: 8, offset: 2 }}>
                        <h2>Create new beer:</h2>
                        <Form onSubmit={this.handleSubmit} >
                            <Form.Group controlId="name">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" name="name" value={this.state.name} onChange={this.handleInputs} />
                            </Form.Group>
                            <Form.Group controlId="tagline">
                                <Form.Label>Tagline</Form.Label>
                                <Form.Control type="text" name="tagline" value={this.state.tagline} onChange={this.handleInputs} />
                            </Form.Group>
                            <Form.Group controlId="description">
                                <Form.Label>Description</Form.Label>
                                <Form.Control as="textarea" name="description" value={this.state.description} onChange={this.handleInputs} />
                            </Form.Group>
                            <Form.Group controlId="first_brewed">
                                <Form.Label>First brewed</Form.Label>
                                <Form.Control type="text" name="first_brewed" value={this.state.first_brewed} onChange={this.handleInputs} />
                            </Form.Group>
                            <Form.Group controlId="brewers_tips">
                                <Form.Label>Brewers tips</Form.Label>
                                <Form.Control type="text" name="brewers_tips" value={this.state.brewers_tips} onChange={this.handleInputs} />
                            </Form.Group>
                            <Form.Group controlId="attenuation_level">
                                <Form.Label>Attenuation level</Form.Label>
                                <Form.Control type="number" name="attenuation_level" value={this.state.attenuation_level} onChange={this.handleInputs} />
                            </Form.Group>
                            <Form.Group controlId="contributed_by">
                                <Form.Label>Contributed by</Form.Label>
                                <Form.Control type="text" name="contributed_by" value={this.state.contributed_by} onChange={this.handleInputs} />
                            </Form.Group>
                            <Button variant="dark" type="submit">Submit!</Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        )
    }
}


export default NewBeer