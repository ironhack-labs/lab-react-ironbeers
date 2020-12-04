import React, { Component } from 'react'
import {Redirect} from 'react-router-dom'
import { Form, Button, Container } from 'react-bootstrap'
import axios from 'axios'

import Header from './Header'

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
            contributed_by: '',
            redirectToReferrer: false
        }
    }

    handleInputChange = e => {
        const { name, value } = e.target
        this.setState({ [name]: value })
    }

    handleFormSubmit = e => {
        e.preventDefault()
        axios
            .post('https://ih-beers-api2.herokuapp.com/beers/new', this.state)
            .then(() => this.setState({redirectToReferrer: true}))
    }




    render() {
        const redirectToReferrer = this.state.redirectToReferrer;
        if (redirectToReferrer) {
            return <Redirect to="/beers"/>
        }
        
        return (
            <>
            <Header />
            <Container>

            <Form onSubmit={this.handleFormSubmit}>
                <Form.Group>
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" name="name" value={this.state.name} onChange={this.handleInputChange} />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Tagline</Form.Label>
                    <Form.Control type="text" name="tagline" value={this.state.tagline} onChange={this.handleInputChange} />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Description</Form.Label>
                    <Form.Control type="text" name="description" value={this.state.description} onChange={this.handleInputChange} />
                </Form.Group>

                <Form.Group>
                    <Form.Label>First Brewed</Form.Label>
                    <Form.Control type="text" name="first_brewed" value={this.state.first_brewed} onChange={this.handleInputChange} placeholder="Format: mm/yyyy"/>
                </Form.Group>

                <Form.Group>
                    <Form.Label>Brewers Tips</Form.Label>
                    <Form.Control type="text" name="brewers_tips" value={this.state.brewers_tips} onChange={this.handleInputChange} />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Attenuation Level</Form.Label>
                    <Form.Control type="number" name="attenuation_level" value={this.state.attenuation_level} onChange={this.handleInputChange} />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Contributed By</Form.Label>
                    <Form.Control type="text" name="contributed_by" value={this.state.contributed_by} onChange={this.handleInputChange} />
                </Form.Group>

                    <Button variant="info" size="sm" block type="submit">Create New Beer</Button>
                    
                </Form>
                </Container>
            </>
        )
    }
}

export default NewBeer