
import React, { Component } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import axios from 'axios';
import Header from './Header'

export default class NewBeer extends Component {

    state = {
        name: '',
        tagline: '',
        description: '',
        first_brewed: '',
        brewers_tips: '',
        attenuation_level: null,
        contributed_by: ''
    }

    handleChange = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        this.setState({
            [name]: value
          })
    }

    handleSubmit = (event) => {
       event.preventDefault();
       axios.post('https://ih-beers-api2.herokuapp.com/beers/new', {
           name: this.state.name,
           tagline: this.state.tagline,
           description: this.state.description,
           first_brewed: this.state.first_brewed,
           brewers_tips: this.state.brewers_tips,
           attenuation_level: this.state.attenuation_level,
           contributed_by: this.state.contributed_by

       }).then(response => {
           console.log(response)
       }).catch(err => console.log(err))
    }

    render() {
        return (
            <Container>
                <Header/>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group controlId="formBasicName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control 
                        type="text" 
                        placeholder="Enter Name"
                        name="name"
                        value={this.state.name}
                        onChange={this.handleChange}
                        required
                         />
                    </Form.Group>

                    <Form.Group controlId="formBasicTagline">
                        <Form.Label>Tagline</Form.Label>
                        <Form.Control 
                        type="text" 
                        placeholder="Enter Tagline"
                        name="tagline"
                        value={this.state.tagline}
                        onChange={this.handleChange} 
                        required
                        />
                    </Form.Group>

                    <Form.Group controlId="formBasicDescription">
                        <Form.Label>Description</Form.Label>
                        <Form.Control 
                        type="text" 
                        placeholder="Enter Description"
                        name="description"
                        value={this.state.description}
                        onChange={this.handleChange} 
                        required
                        />
                    </Form.Group>

                    <Form.Group controlId="formBasicFirstBrewed">
                        <Form.Label>First Brewed</Form.Label>
                        <Form.Control 
                        type="text" 
                        placeholder="Enter First Brewed"
                        name="first_brewed"
                        value={this.state.first_brewed}
                        onChange={this.handleChange} 
                        required
                        />
                    </Form.Group>

                    <Form.Group controlId="formBasicBrewersTips">
                        <Form.Label>Brewers Tips</Form.Label>
                        <Form.Control 
                        type="text" 
                        placeholder="Enter Brewer's Tips"
                        name="brewers_tips"
                        value={this.state.brewers_tips}
                        onChange={this.handleChange} 
                        required
                        />
                    </Form.Group>

                    <Form.Group controlId="formBasicAttenuationLevel">
                        <Form.Label>Attenuation Level</Form.Label>
                        <Form.Control 
                        type="number" 
                        placeholder="Enter Attenuation Level"
                        name="attenuation_level"
                        value={this.state.attenuation_level}
                        onChange={this.handleChange} 
                        required
                        />
                    </Form.Group>

                    <Form.Group controlId="formBasicContributedBy">
                        <Form.Label>Contributed By</Form.Label>
                        <Form.Control 
                        type="text" 
                        placeholder="Enter Contributed By"
                        name="contributed_by"
                        value={this.state.contributed_by}
                        onChange={this.handleChange} 
                        required
                        />
                    </Form.Group>

                    <Button variant="primary" type="submit" >
                        Submit
                    </Button>
                </Form>
            </Container>
        )
    }
}
