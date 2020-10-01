import React, { Component } from 'react'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

import beersService from '../services/beers.service'

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
        this.beersService = new beersService()
    }

    handleInputChange = e => {
        const { name, value } = e.target
        this.setState({ [name]: value })
    }

    handleFormSubmit = e => {
        e.preventDefault()

        this.beersService
            .createNewBeer(this.state)
            .then(() => console.log('hola'))
            .catch(err => console.log(err))

    }




    render() {

        return (

            <Form onSubmit={this.handleFormSubmit}>
                <Form.Group>
                    <Form.Label>name</Form.Label>
                    <Form.Control type="text" name="name" value={this.state.name} onChange={this.handleInputChange} />
                </Form.Group>

                <Form.Group>
                    <Form.Label>tagline</Form.Label>
                    <Form.Control type="text" name="tagline" value={this.state.tagline} onChange={this.handleInputChange} />
                </Form.Group>

                <Form.Group>
                    <Form.Label>description</Form.Label>
                    <Form.Control type="text" name="description" value={this.state.description} onChange={this.handleInputChange} />
                </Form.Group>

                <Form.Group>
                    <Form.Label>first_brewed</Form.Label>
                    <Form.Control type="text" name="first_brewed" value={this.state.first_brewed} onChange={this.handleInputChange} />
                </Form.Group>

                <Form.Group>
                    <Form.Label>brewers_tips</Form.Label>
                    <Form.Control type="text" name="brewers_tips" value={this.state.brewers_tips} onChange={this.handleInputChange} />
                </Form.Group>

                <Form.Group>
                    <Form.Label>attenuation level</Form.Label>
                    <Form.Control type="text" name="attenuation_level" value={this.state.attenuation_level} onChange={this.handleInputChange} />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Contributed</Form.Label>
                    <Form.Control type="text" name="contributed_by" value={this.state.contributed_by} onChange={this.handleInputChange} />
                </Form.Group>

                <Button variant="info" type="submit">New Beer</Button>
            </Form>
        )
    }
}

export default NewBeer