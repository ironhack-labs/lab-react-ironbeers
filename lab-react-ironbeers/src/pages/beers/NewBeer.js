import React, { Component } from 'react'
import BeersService from '../../service/BeerService'
import { Form, Button } from 'react-bootstrap'


class NewBeer extends Component {
    constructor() {
        super()
        this.state = {
            name: '',
            description: '',
            image_url: '',
        }
        this.BeersService = new BeersService()
    }
    handleInputChange = e => this.setState({ [e.target.name]: e.target.value })
    handleSubmit = e => {
        e.preventDefault()
        this.BeersService
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
                <h1>New Beer</h1>
                <hr />
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group controlId="title">
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control type="text" name="name" value={this.state.name} onChange={this.handleInputChange} />
                    </Form.Group>
                    <Form.Group controlId="description">
                        <Form.Label>Descripción</Form.Label>
                        <Form.Control type="text" name="description" value={this.state.description} onChange={this.handleInputChange} />
                    </Form.Group>
                    <Form.Group controlId="imageUrl">
                        <Form.Label>Imagen (URL)</Form.Label>
                        <Form.Control type="text" name="image_url" value={this.state.image_url} onChange={this.handleInputChange} />
                    </Form.Group>
                    <Button variant="dark" type="submit">Crear nueva cerveza</Button>
                </Form>
            </>
        )
    }
}
export default NewBeer