import React, { Component } from 'react'
import BeersService from './allBeersService'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

class FormBeer extends Component {
    constructor() {
        super()
        this.state = {
            name: '',
            image_url: '',
            tagline: '',
            first_brewed: '',
            description: ''
        }
        this.BeersService = new BeersService()
    }

    handleInputChange = e => {
        const { name, value } = e.target
        this.setState({ [name]: value })
    }

    handleFormSubmit = e => {
        e.preventDefault()
        this.BeersService
            .createBeer(this.state)
            .then(() => this.props.handleBeerSubmit())
            .catch(err => console.log(err))
    }

    render() {
        return (
            <>
                <h3>Nueva montaña</h3>
                <hr></hr>
                <Form onSubmit={this.handleFormSubmit}>
                    <Form.Group>
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control onChange={this.handleInputChange} value={this.state.name} name="name" type="text" />
                        <Form.Text className="text-muted">Sin faltas de ortografía.</Form.Text>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Descripción</Form.Label>
                        <Form.Control onChange={this.handleInputChange} value={this.state.description} name="description" type="text" />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Longitud</Form.Label>
                        <Form.Control onChange={this.handleInputChange} value={this.state.tagline} name="tagline" type="number" />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Inversiones</Form.Label>
                        <Form.Control onChange={this.handleInputChange} value={this.state.inversions} name="inversions" type="number" />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Imagen (URL)</Form.Label>
                        <Form.Control onChange={this.handleInputChange} value={this.state.image_url} name="image_url" type="text" />
                    </Form.Group>

                    <Button variant="dark" type="submit">Submit</Button>
                </Form>
            </>
        )
    }
}

export default FormBeer