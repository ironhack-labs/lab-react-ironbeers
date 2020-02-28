import React, { Component } from 'react'

import BeerServices from '../../services/beers.services'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

class BeerForm extends Component {

    constructor(props) {
        super(props)
        this.services = new BeerServices()
        this.state = {
            beer: {
                image_url: '',
                name: '',
                description: '',
                tagline: '',
                contributed_by: ''
            }
        }
    }



    postBeer = () => {
        this.services.postBeer(this.state.beer)
            .then(() => console.log("All done"))
            .catch(err => console.log(err))
    }

    handleChange = e => {
        let { name, value } = e.target
        this.setState({
            beer: { ...this.state.beer, [name]: value }
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        this.postBeer()
    }

    render() {

        return (
            <Form onSubmit={this.handleSubmit}>
                <Form.Group>
                    <Form.Label>Imagen</Form.Label>
                    <Form.Control type="text" name="image_url" value={this.state.beer.image_url} onChange={this.handleChange} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control type="text" name="name" value={this.state.beer.name} onChange={this.handleChange} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Descripcion</Form.Label>
                    <Form.Control type="text" name="description" value={this.state.beer.description} onChange={this.handleChange} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Tagline</Form.Label>
                    <Form.Control type="text" name="tagline" value={this.state.beer.tagline} onChange={this.handleChange} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Creador:</Form.Label>
                    <Form.Control type="text" name="contributed_by" value={this.state.beer.contributed_by} onChange={this.handleChange} />
                </Form.Group>

                <Button variant="dark" type="submit">Crear nueva Cerveza</Button>
            </Form>
        )
    }
}

export default BeerForm