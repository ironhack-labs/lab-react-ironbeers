import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { Link } from "react-router-dom";

const axios = require('axios').default;

export default class BeerForm extends Component {
    
    state = {
        name: "",
        tagline: "",
        description: "",
        first_brewed: "",
        brewers_tips: "",
        attenuation_level: 0,
        contributed_by: "",
        modal: false,
        message: ''
    }

    onSubmit = (e) => {
        e.preventDefault();
        let beer = {...this.state}
        axios.post('https://ih-beers-api2.herokuapp.com/beers/new', beer)
            .then((response) => {
                this.setState({modal: true, message: response.data.message})
            })
            .catch((error) => {
                this.setState({modal: true, message: "Error: " + error.message + ". Try again."})
            })
    }

    handleInput = (e) => {
        let key = e.target.id
        this.setState({[key]: e.target.value})
    }

    render() {
        return (
            <div className="container mt-5 pt-5 text-left">
                {this.state.modal 
                ? 
                <div className="message">
                    {this.state.message}
                    <br /> <br />
                    <Link to="/beers">
                        <Button>Continue</Button>
                    </Link>
                </div> 
                : 
                <Form onSubmit={this.onSubmit}>
                    <Form.Group controlId="name">
                        <Form.Label className="ml-3">Name</Form.Label>
                        <Form.Control name="name" className="input" type="text" placeholder="Beer name" onChange={this.handleInput} />
                    </Form.Group>
                    <Form.Group controlId="tagline">
                        <Form.Label className="ml-3">Tagline</Form.Label>
                        <Form.Control name="tagline" className="input" type="text" placeholder="Tag line" onChange={this.handleInput} />
                    </Form.Group>
                    <Form.Group controlId="description">
                        <Form.Label className="ml-3">Example textarea</Form.Label>
                        <Form.Control name="description" as="textarea" rows={3} className="input" type="text" placeholder="Description" onChange={this.handleInput} />
                    </Form.Group>
                    <Form.Group controlId="first_brewed">
                        <Form.Label className="ml-3">First Brewed</Form.Label>
                        <Form.Control name="first_brewed" className="input" type="text" placeholder="First brewed" onChange={this.handleInput} />
                    </Form.Group>
                    <Form.Group controlId="brewers_tips">
                        <Form.Label className="ml-3">Brewer Tips</Form.Label>
                        <Form.Control name="brewers_tips" className="input" type="text" placeholder="Brewer tips" onChange={this.handleInput} />
                    </Form.Group>
                    <Form.Group controlId="attenuation_level">
                        <Form.Label className="ml-3">Attenuation Level</Form.Label>
                        <Form.Control name="attenuation_level" className="input" type="number" placeholder="0" onChange={this.handleInput} />
                    </Form.Group>
                    <Form.Group controlId="contributed_by">
                        <Form.Label className="ml-3">Contributed By</Form.Label>
                        <Form.Control name="contributed_by" className="input" type="text" placeholder="Contributed by" onChange={this.handleInput} />
                    </Form.Group>
                    <Button variant="dark" type="submit">
                        Submit
                    </Button>
                </Form>
            }
            </div> 
        )}
}
