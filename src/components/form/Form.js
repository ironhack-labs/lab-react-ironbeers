import React, { Component } from 'react'
import { Form, Button, Container } from 'react-bootstrap'
import BeerService from '../../services/beer.service'



class BeersForm extends Component {

    constructor() {
        super()
        this.state = {
            name: '',
            tagline: '',
            first_brewed: '',
            description: '',
            attenuation_level: '',
            image_url: ''
        }
        this.BeerService = new BeerService()
    }


    handleInputChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }


    handleFormSubmit = e => {
        e.preventDefault()

        this.BeerService
            .createBeer(this.state)
            .then((res) => {
                this.props.closeModal();
                this.setState({ name: '', tagline: '', first_brewed: '', description: '', attenuation_level: '', imageUrl: '' })
            })
            .catch(err => console.log(err))
    }

    render() {
        return (
            <Container>

                <Form onSubmit={this.handleFormSubmit}>

                    <Form.Group controlId="name">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" value={this.state.name} onChange={this.handleInputChange} name="name" />
                    </Form.Group>

                    <Form.Group controlId="tag">
                        <Form.Label>Tagline</Form.Label>
                        <Form.Control type="text" value={this.state.tagline} onChange={this.handleInputChange} name="tagline" />
                    </Form.Group>

                    <Form.Group controlId="brewed">
                        <Form.Label>First brewed</Form.Label>
                        <Form.Control type="text" value={this.state.first_brewed} onChange={this.handleInputChange} name="first_brewed" />
                    </Form.Group>

                    <Form.Group controlId="attenuation">
                        <Form.Label>Attenuation_level</Form.Label>
                        <Form.Control type="text" value={this.state.description} onChange={this.handleInputChange} name="description" />
                    </Form.Group>
                    <Form.Group controlId="description">
                        <Form.Label>Description</Form.Label>
                        <Form.Control type="text" value={this.state.attenuation_level} onChange={this.handleInputChange} name="attenuation_level" />
                    </Form.Group>

                    <Form.Group controlId="lng">
                        <Form.Label>Image (URL)</Form.Label>
                        <Form.Control type="text" value={this.state.image_url} onChange={this.handleInputChange} name="image_url" />
                    </Form.Group>

                    <Button style={{ marginTop: '20px', width: '100%' }} variant="dark" type="submit">Create new beer</Button>

                </Form>

            </Container>
        )
    }
}

export default BeersForm