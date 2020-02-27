import React, { Component } from 'react'
import BeerServices from '../services/beers.services'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'


class BeerForm extends Component {

    constructor(props) {
        super(props)
        this.services = new BeerServices()
        this.state = {
            beer: {
                name: '',
                tagline: '',
                description: '',
                first_brewed: '',
                brewers_tips: '',
                attenuation_level : '',
                contributed_by :'',
                
            }
        }
    }

    postBeer = () => {
        this.services.postBeer(this.state.beer)
            .then(() => alert("Created, sorry for the alert"))
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
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control type="text" name="name" value={this.state.beer.name} onChange={this.handleChange} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Tagline</Form.Label>
                    <Form.Control type="text" name="tagline" value={this.state.beer.tagline} onChange={this.handleChange} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Description</Form.Label>
                    <Form.Control type="text" name="description" value={this.state.beer.description} onChange={this.handleChange} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>First Brewed</Form.Label>
                    <Form.Control type="text" name="first_brewed" value={this.state.beer.first_brewed} onChange={this.handleChange} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Brewed Tips</Form.Label>
                    <Form.Control type="text" name="brewers_tips" value={this.state.beer.brewers_tips} onChange={this.handleChange} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Attenuation Level</Form.Label>
                    <Form.Control type="number" name="attenuation_level" value={this.state.beer.attenuation_level} onChange={this.handleChange} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Contributed By</Form.Label>
                    <Form.Control type="text" name="contributed_by" value={this.state.beer.contributed_by} onChange={this.handleChange} />
                </Form.Group>
                

                <Button variant="dark" type="submit">Create new Beer</Button>
            </Form>
        )
    }
}

export default BeerForm