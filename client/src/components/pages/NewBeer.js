import { Component } from 'react'
import { Form, Button, Container } from 'react-bootstrap'
import React from 'react'
import BeersService from '../../service/beers.service'

class NewBeer extends Component {

    constructor() {
        super()
        this.state = {
            name: '',
            tagline: '',
            description: '',
            first_bewed: '',
            bewers_tips: '',
            attenuation_level: 0,
            contributed_by:''
        }

        this.beerService = new BeersService()
    }


    handleInputChange(e) {
        const { value, name, tagline, description, first_brewed, brewers_tips, attenuation_level, contributed_by } = e.target
        this.setState({ 
            [name]: value, 
            [tagline]: value, 
            [description]: value, 
            [first_brewed]: value, 
            [brewers_tips]: value, 
            [attenuation_level]: value, 
            [contributed_by]: value })
    }


    handleSubmit(e) {

        e.preventDefault()

        this.beerService
            .newBeer(this.state)
            .then(() => {
                this.props.refreshCoasters()
            })
            .catch(err => console.log(err))
    }

    render() {
        return (
            <Form onSubmit={e => this.handleSubmit(e)}>
                <Form.Group controlId="name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" value={this.state.name} onChange={e => this.handleInputChange(e)} name="name" />
                </Form.Group>

                <Form.Group controlId="tagline">
                    <Form.Label>Tagline</Form.Label>
                    <Form.Control type="text" value={this.state.tagline} onChange={e => this.handleInputChange(e)} name="tagline" />
                </Form.Group>

                <Form.Group controlId="description">
                    <Form.Label>Description</Form.Label>
                    <Form.Control type="text" value={this.state.description} onChange={e => this.handleInputChange(e)} name="description" />
                </Form.Group>


                <Form.Group controlId="first_brewed">
                    <Form.Label>First brewed</Form.Label>
                    <Form.Control type="text" value={this.state.first_brewed} onChange={e => this.handleInputChange(e)} name="first_brewed" />
                </Form.Group>

                <Form.Group controlId="brewers_tips">
                    <Form.Label>Brewers Tips</Form.Label>
                    <Form.Control type="text" value={this.state.brewers_tips} onChange={e => this.handleInputChange(e)} name="brewers_tips" />
                    <Form.Text className="text-muted">Sin caracteres especiales</Form.Text>
                </Form.Group>

                <Form.Group controlId="attenuation_level">
                    <Form.Label>Attenuation Level</Form.Label>
                    <Form.Control type="number" value={this.state.attenuation_level} onChange={e => this.handleInputChange(e)} name="attenuation_level" />
                    <Form.Text className="text-muted">Sin caracteres especiales</Form.Text>
                </Form.Group>

                <Form.Group controlId="contributed_by">
                    <Form.Label>Contributed by:</Form.Label>
                    <Form.Control type="text" value={this.state.contributed_by} onChange={e => this.handleInputChange(e)} name="contributed_by" />
                </Form.Group>

                <Button variant="dark" style={{ width: '100%' }} type="submit">Create New Beer</Button>
            </Form>
        )
    }
}

export default NewBeer