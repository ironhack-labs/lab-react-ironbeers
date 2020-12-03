import React, { Component } from 'react'
import BeersService from './../../service/beers.service'

import { Form, Button } from 'react-bootstrap'

export default class BeerForm extends Component {

    constructor() {
        super()

        this.state = {
            name: '',
            tagline: '',
            description: '',
            first_brewed: '',
            atteniation_level: '',
            contributed_by: ''
        }

        this.beersService = new BeersService()
    }
    handleInputChange = e => this.setState({ [e.target.name]: e.target.value })

    handleSubmit = e => {
        e.preventDefault()

        this.beersService
            .addNew(this.state)
            .then(res => {
                this.props.updateList()
                this.props.closeModal()
            })
            .catch(err => console.log(err))
    }

    render() {

        return (
            <>
                <h1>New Beer</h1>
                <hr />

                <Form onSubmit={this.handleSubmit}>
                    <Form.Group controlId="name">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" name="name" value={this.state.name} onChange={this.handleInputChange} />
                    </Form.Group>
                    <Form.Group controlId="tagline">
                        <Form.Label>Tagline</Form.Label>
                        <Form.Control type="text" name="tagline" value={this.state.tagline} onChange={this.handleInputChange} />
                    </Form.Group>
                    <Form.Group controlId="description">
                        <Form.Label>Description</Form.Label>
                        <Form.Control type="text" name="description" value={this.state.description} onChange={this.handleInputChange} />
                    </Form.Group>
                    <Form.Group controlId=" first_brewed">
                        <Form.Label>First brewed:</Form.Label>
                        <Form.Control type="text" name=" first_brewed" value={this.state.first_brewed} onChange={this.handleInputChange} />
                    </Form.Group>
                    <Form.Group controlId="atteniation_level">
                        <Form.Label> Atteniation Level:</Form.Label>
                        <Form.Control type="text" name="atteniation_level" value={this.state.atteniation_level} onChange={this.handleInputChange} />
                    </Form.Group>
                    <Form.Group controlId="contributed_by">
                        <Form.Label> Contributed by:</Form.Label>
                        <Form.Control type="text" name="contributed_by" value={this.state.contributed_by} onChange={this.handleInputChange} />
                    </Form.Group>
                    <Button variant="dark" type="submit">Add new beer</Button>
                </Form>
            </>
        )
    }
}
