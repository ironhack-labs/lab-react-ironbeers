import React, { Component } from 'react'
import BeerService from './../../../service/beers.service'

import { Form, Button } from 'react-bootstrap'

class BeerForm extends Component {

    constructor() {
        super()
        this.state = {
            name: '',
            tagline: '',
            description: '',
            first_brewed: '',
            brewers_tips: ''
        }
        this.beerService = new BeerService()
    }

    handleInputChange = e => this.setState({ [e.target.name]: e.target.value })

    handleSubmit = e => {
        e.preventDefault()

        this.beerService
            .saveNewBeer(this.state)
            .then(res => {
                this.props.updateList()
                this.props.closeModal()
            })
            .catch(err => console.log(err))
    }


    render() {

        return (
            <>
                <h1>Nueva cerveza</h1>
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
                    <Form.Group controlId="first_brewed">
                        <Form.Label>First Brewed</Form.Label>
                        <Form.Control type="text" name="first_brewed" value={this.state.first_brewed} onChange={this.handleInputChange} />
                    </Form.Group>
                    <Form.Group controlId="brewers_tips">
                        <Form.Label>Brewer tips</Form.Label>
                        <Form.Control type="text" name="brewers_tips" value={this.state.brewers_tips} onChange={this.handleInputChange} />
                    </Form.Group>
                    <Button variant="dark" type="submit">Crear cerveza</Button>
                </Form>
            </>
        )
    }
}

export default BeerForm