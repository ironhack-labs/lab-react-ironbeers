import React, { Component } from 'react'
import BeersServices from '../../services/beers.services'
import NavBar from '../ui/NavBar'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

class BeerForm extends Component {

    constructor(props) {
        super(props)
        this.services = new BeersServices()
        this.state = {
            beer: {
                name: '',
                tagline: '',
                description: '',
                first_brewed: '',
                brewers_tips: '',
                attenuation_level: 0,
                contributed_by: ''
            }
        }
    }

    finishAction = () => {
        this.props.closeModal()
        this.props.refreshList()
    }

    postBeer = () => {
        this.services.postBeer(this.state.beer)
            .then(() => this.finishAction())
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
            <>
                <NavBar />
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group>
                        <Form.Label>Name</Form.Label>
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
                        <Form.Label>Brewer Tips</Form.Label>
                        <Form.Control type="text" name="brewers_tips" value={this.state.beer.brewers_tips} onChange={this.handleChange} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Attenuation Level</Form.Label>
                        <Form.Control type="number" name="attenuation_level" value={this.state.beer.attenuation_level} onChange={this.handleChange} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Contribuited By</Form.Label>
                        <Form.Control type="text" name="contributed_by" value={this.state.beer.contributed_by} onChange={this.handleChange} />
                    </Form.Group>
                    <Button variant="light" type="submit">Add New</Button>
                </Form>
            </>
        )
    }
}

export default BeerForm