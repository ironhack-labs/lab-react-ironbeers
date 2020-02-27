import React from 'react'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { Redirect } from 'react-router'


import BeersServices from './../../../services/beers.services'

import './NewBeer.css'
import { Component } from 'react'

class NewBeer extends Component {
    constructor() {
        super()
        this.state = {
            beer: {
                name: '',
                tagline: '',
                first_brewed: '',
                description: '',
                brewers_tips: '',
                attenuation_level: 0,
                contributed_by: ''
            },
            redirect: false
        }
        this.services = new BeersServices()
    }

    handleChange = e => {
        let { value, name, type } = e.target
        type === "number" && (value = parseInt(value))
        this.setState({
            beer: {
                ...this.state.beer,
                [name]: value
            }
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        this.services.newBeer(this.state.beer)
            .then(response => response)
            .then(() => this.setState({
                redirect: true
            }))
            .catch(err => console.log(err))
    }

    render() {
        return (
            <Container className="new-form">
                {this.state.redirect ? <Redirect to={'/beers'} /> : null}
                <Row>
                    <Col>
                        <Form onSubmit={this.handleSubmit}>
                            <Form.Group>
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" value={this.state.name} onChange={this.handleChange} placeholder="Name" name="name" />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Tagline</Form.Label>
                                <Form.Control type="text" value={this.state.tagline} onChange={this.handleChange} placeholder="Tagline" name="tagline" />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Description</Form.Label>
                                <Form.Control as="textarea" value={this.state.description} onChange={this.handleChange} rows="3" name="description" />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>First Brewed</Form.Label>
                                <Form.Control type="text" value={this.state.first_brewed} onChange={this.handleChange} placeholder="First Brewed" name="first_brewed" />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Brewer Tips</Form.Label>
                                <Form.Control type="text" value={this.state.brewers_tips} onChange={this.handleChange} placeholder="Brewer Tips" name="brewers_tips" />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Attenuation Level</Form.Label>
                                <Form.Control type="number" value={this.state.attenuation_level} onChange={this.handleChange} placeholder="Attenuation Level" name="attenuation_level" />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Contributed By</Form.Label>
                                <Form.Control type="text" value={this.state.contributed_by} onChange={this.handleChange} placeholder="Contributed By" name="contributed_by" />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Add New
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default NewBeer