import React, { Component } from 'react'
import BeerService from '../../../service/BeerService'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'


class BeerForm extends Component {
    constructor() {
        super()
        this.state = {
            name: '',
            tagline: '',
            contributed_by: '',
            first_brewed: '',
            image_url: ''
        }
        this.BeerService = new BeerService()
    }


    handleInputChange = e => {
        const { name, value } = e.target
        this.setState({ [name]: value })
    }

    handleFormSubmit = e => {
        e.preventDefault()
        this.BeerService
            .createBeer(this.state)
            .then(() => this.props.handleBeerSubmit())
            .catch(err => console.log(err))
    }

    render() {
        return (
            <>
                <h3>new beer</h3>
                <hr></hr>
                <Form onSubmit={this.handleFormSubmit}>
                    <Form.Group>
                        <Form.Label>name</Form.Label>
                        <Form.Control onChange={this.handleInputChange} value={this.state.title} name="title" type="name" />
                        <Form.Text className="text-muted">be creative</Form.Text>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>description</Form.Label>
                        <Form.Control onChange={this.handleInputChange} value={this.state.description} name="description" type="text" />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>tagline</Form.Label>
                        <Form.Control onChange={this.handleInputChange} value={this.state.length} name="tagline" type="text" />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>first_brewed</Form.Label>
                        <Form.Control onChange={this.handleInputChange} value={this.state.inversions} name="first-brewed" type="number" />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>image (URL)</Form.Label>
                        <Form.Control onChange={this.handleInputChange} value={this.state.imageUrl} name="image_url" type="text" />
                    </Form.Group>

                    <Button variant="dark" type="submit">Dale</Button>
                </Form>
            </>
        )
    }
}

export default BeerForm