import React, { Component } from 'react'

import BeersServices from '../../services/beers.services'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

class CoasterForm extends Component {

    constructor(props) {
        super(props)
        this.services = new BeersServices()
        this.state = {
            beer: {
                name: '',
                description: '',
                tagline: '',
                first_brewed: '',
                brewers_tips: '',
                attenuation_level: 0,
                contributed_by: ''
            }
        }
        console.log("HOLAAA")
    }

    componentDidMount = () => this.getBeerForm()

    getBeerForm = () => {
        this.services.getBeerForm()
            .catch(err => console.log(err))
    }

    handleSubmit = e => {
        e.preventDefault()
        this.postBeer()
        this.setState({
            beer:{
                name: '',
                description: '',
                tagline: '',
                first_brewed: '',
                brewers_tips: '',
                attenuation_level: 0,
                contributed_by: ''
            }
        })
    }

    postBeer = () => {
        this.services.postBeer(this.state.beer)
            .then((x) => console.log(x))
            .catch(err => console.log(err))
    }

    handleChange = e => {
        let { name, value } = e.target
        this.setState({
            beer: { ...this.state.beer, [name]: value }
        })
    }

    

    render() {
        console.log("Soy el render")
        return (
            <Form onSubmit={this.handleSubmit}>
                <Form.Group>
                    <Form.Label className="d-inline">name</Form.Label>
                    <Form.Control type="text" name="name" value={this.state.beer.name} onChange={this.handleChange} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>description</Form.Label>
                    <Form.Control type="text" name="description" value={this.state.beer.description} onChange={this.handleChange} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>tagline</Form.Label>
                    <Form.Control type="text" name="tagline" value={this.state.beer.tagline} onChange={this.handleChange} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>first_brewed</Form.Label>
                    <Form.Control type="text" name="first_brewed" value={this.state.beer.first_brewed} onChange={this.handleChange} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>brewers_tips</Form.Label>
                    <Form.Control type="text" name="brewers_tips" value={this.state.beer.brewers_tips} onChange={this.handleChange} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>attenuation_level</Form.Label>
                    <Form.Control type="number" name="attenuation_level" value={this.state.beer.attenuation_level} onChange={this.handleChange} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>contributed_by</Form.Label>
                    <Form.Control type="text" name="contributed_by" value={this.state.beer.contributed_by} onChange={this.handleChange} />
                </Form.Group>

                <Button variant="dark" type="submit">Create new Beer</Button>
            </Form>
        )
    }
}

export default CoasterForm