import React, {Component} from 'react'
import BeersService from '../../service/BeersService'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

class BeerForm extends Component {
    constructor (){
        super ()
        this.state = {
            name:'',
            tagline:'',
            description:'',
            first_brewed: '',
            brewers_tips: '',
            attenuation_level: 0,
            contributed_by: ''
        }
        this.beersService = new BeersService()
    }

    handleInputChange = e => {
        const {name, value} = e.target
        this.setState({[name]: value})
    }

    handleFormSubmit = e => {
        e.preventDefault()
        this.beersService
            .createBeer(this.state)
            .then(this.setState({
                name:'',
                tagline:'',
                description:'',
                first_brewed: '',
                brewers_tips: '',
                attenuation_level: 0,
                contributed_by: ''
            }))
            .catch(err => console.log(err))
    }

    render () {
        return (
            <>
                <h3>New Beer</h3>
                <hr></hr>
                <Form onSubmit={this.handleFormSubmit}>
                    <Form.Group>
                        <Form.Label>Name</Form.Label>
                        <Form.Control onChange={this.handleInputChange} value={this.state.name} name="name" type="text" />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Tagline</Form.Label>
                        <Form.Control onChange={this.handleInputChange} value={this.state.tagline} name="tagline" type="text" />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Description</Form.Label>
                        <Form.Control onChange={this.handleInputChange} value={this.state.description} name="description" type="text" />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>First Brewed</Form.Label>
                        <Form.Control onChange={this.handleInputChange} value={this.state.first_brewed} name="first_brewed" type="text" />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Brewers Tips</Form.Label>
                        <Form.Control onChange={this.handleInputChange} value={this.state.brewers_tips} name="brewers_tips" type="text" />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Attenuation Level</Form.Label>
                        <Form.Control onChange={this.handleInputChange} value={this.state.attenuation_level} name="attenuation_level" type="number" />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Contributed By</Form.Label>
                        <Form.Control onChange={this.handleInputChange} value={this.state.contributed_by} name="contributed_by" type="text" />
                    </Form.Group>

                    <Button variant="dark" type="submit">Submit</Button>
                </Form>
            </>
        )
    }
}

export default BeerForm