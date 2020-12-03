import React, { Component } from 'react'
import BeersService from './../service/beers.service'
import {Form, Button} from 'react-bootstrap'

class BeerForm extends Component {

    constructor() {
        super()
        this.state = {
            brewer_tips: "",
            name: "",
            tagline: "",
            first_brewed: "",
            attenuation_level: "",
            description: "",
            contributed_by: ""
        }

        this.beersService = new BeersService()
    }

    handleInputChange = e => this.setState({ [e.target.name]: e.target.value })

    handleSubmit = e => {
        e.preventDefault()

        this.beersService
            .newBeer(this.state)
            .then(res => {
                this.props.updateList()
                this.props.closeModal()
            })
            .catch(err => console.log(err))
    }

    render() {
        return (
            <>
                 <h1>New beer</h1>
                <hr />

                <Form onSubmit={this.handleSubmit}>
                    <Form.Group controlId="name">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" name="name" value={this.state.name} onChange={this.handleInputChange} />
                    </Form.Group>
                    <Form.Group controlId="description">
                        <Form.Label>Description</Form.Label>
                        <Form.Control type="text" name="description" value={this.state.description} onChange={this.handleInputChange} />
                    </Form.Group>
                    <Form.Group controlId="tagline">
                        <Form.Label>Tag line</Form.Label>
                        <Form.Control type="text" name="tagline" value={this.state.tagline} onChange={this.handleInputChange} />
                    </Form.Group>
                    <Form.Group controlId="first_brewed">
                        <Form.Label>First Brewed</Form.Label>
                        <Form.Control type="text" name="first_brewed" value={this.state.first_brewed} onChange={this.handleInputChange} />
                    </Form.Group>
                    <Form.Group controlId="brewer_tips">
                        <Form.Label>Brewer Tips</Form.Label>
                        <Form.Control type="text" name="brewer_tips" value={this.state.brewer_tips} onChange={this.handleInputChange} />
                    </Form.Group>
                    <Form.Group controlId="attenuation_level">
                        <Form.Label>Attenuation level</Form.Label>
                        <Form.Control type="number" name="attenuation_level" value={this.state.attenuation_level} onChange={this.handleInputChange} />
                    </Form.Group>
                    <Form.Group controlId="contributed_by">
                        <Form.Label>Comtributed by</Form.Label>
                        <Form.Control type="text" name="contributed_by" value={this.state.contributed_by} onChange={this.handleInputChange} />
                    </Form.Group>
                    <Button variant="dark" type="submit">Create new beer</Button>
                </Form>
                </>
        )
    }
    
}


export default BeerForm