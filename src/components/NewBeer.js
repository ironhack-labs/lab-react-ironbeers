import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import axios from 'axios'


class AddNew extends Component {
    constructor (){
        super ()
        this.state = {

name: "",
tagline: "", 
description: "",
first_brewed: "",
brewers_tips: "",
attenuation_level: "", 
contributed_by: "",
        }
    }



    handleInputChange = e => {
        const { name, value } = e.target
        this.setState({ [name]: value })
        axios.post(`https://ih-beers-api2.herokuapp.com/beers/newp`, this.state)
        .then(res => console.log(res))
        this.setState({})
        
    }

    handleFormSubmit = e => {
        e.preventDefault()
          
    }

    render () {
        return (
            <>
            <h3>Nueva Cerveza</h3>
            <hr></hr>
            <Form onSubmit={this.handleFormSubmit}>
                <Form.Group>
                    <Form.Label>Name</Form.Label>
                    <Form.Control onChange={this.handleInputChange} value={this.state.name} name="name" type="text" />
                    <Form.Text className="text-muted">Sin faltas de ortografía.</Form.Text>
                </Form.Group>

                <Form.Group>
                    <Form.Label>Tagline</Form.Label>
                    <Form.Control onChange={this.handleInputChange} value={this.state.tagline} name="tagline" type="text" />
                </Form.Group>

                <Form.Group>
                    <Form.Label>first brewed</Form.Label>
                    <Form.Control onChange={this.handleInputChange} value={this.state.description} name="description" type="text" />
                </Form.Group>
                <Form.Group>
                    <Form.Label>first brewed</Form.Label>
                    <Form.Control onChange={this.handleInputChange} value={this.state.first_brewed} name="first_brewed" type="text" />
                </Form.Group>

                <Form.Group>
                    <Form.Label>brewers tips</Form.Label>
                    <Form.Control onChange={this.handleInputChange} value={this.state.brewers_tips} name="brewers_tips" type="text" />
                </Form.Group>

                <Form.Group>
                    <Form.Label>brewers tips</Form.Label>
                    <Form.Control onChange={this.handleInputChange} value={this.state.contributed_by} name="contributed_by" type="text" />
                </Form.Group>

                <Form.Group>
                    <Form.Label>attenuation level</Form.Label>
                    <Form.Control onChange={this.handleInputChange} value={this.state.imageUrl} name="attenuation_level" type="number" />
                </Form.Group>

                <Button variant="dark" type="submit">Submit</Button>
            </Form>
        </>
        )
    }
}

export default AddNew