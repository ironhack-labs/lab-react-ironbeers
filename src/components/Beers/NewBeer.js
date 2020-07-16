import React, { Component } from 'react'
import BeerService from '../../service/BeerService'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

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
        this.beerService = new BeerService()
    }

    handleInputChange = e => {
        const { name, value } = e.target
        this.setState({ [name]: value })
    }

    handleFormSubmit = e => {
        e.preventDefault()
        this.beerService
            .newBeer(this.state)
            .then(this.setState({
                name: '',
                tagline: '',
                description: '',
                first_brewed: '',
                brewers_tips: '',
                attenuation_level: '',
                contributed_by: ''
            }))
            .catch(err => console.log(err))
    }

    render() {
        return (
            <div className="container">
                <h3>Add a new beer</h3>
                <hr></hr>
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
                        <Form.Label>Attenuation Level</Form.Label>
                        <Form.Control onChange={this.handleInputChange} value={this.state.attenuation_level} name="attenuation_level" type="number" />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Contributed By</Form.Label>
                        <Form.Control onChange={this.handleInputChange} value={this.state.contributed_by} name="contributed_by" type="text" />
                    </Form.Group>


                    <Button variant="dark" type="submit">Submit</Button>
                </Form>
            </div>
        )
    }
}

export default NewBeer