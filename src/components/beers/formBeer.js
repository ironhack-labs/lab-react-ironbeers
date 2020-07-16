import React, { Component } from 'react'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import BeerService from './../../service/beer-service'

class FormBeer extends Component {
    constructor() {
        super()
        this.state = {
            name: '',
            tagline: '',
            description: ''
        }
         this.BeerService = new BeerService ()
    }

    handleInputChange = e => {
        const { name, value } = e.target
        this.setState({ [name]: value })
    }

    handleFormSubmit = e => {
        e.preventDefault()
        this.BeerService
            .createBeer (this.state)
            .then(() => this.props.handleCoasterSubmit())
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
                        <Form.Control onChange={this.handleInputChange} value={this.state.title} name="name" type="text" />
                        <Form.Text className="text-muted">Sin faltas de ortografía.</Form.Text>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Descripción</Form.Label>
                        <Form.Control onChange={this.handleInputChange} value={this.state.description} name="description" type="text" />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Longitud</Form.Label>
                        <Form.Control onChange={this.handleInputChange} value={this.state.length} name="tagline" type="text" />
                    </Form.Group>

                    <Button variant="dark" type="submit">Submit</Button>
                </Form>
            </>
        )
    }
}

export default FormBeer