import React from 'react';
// import logo from './logo.svg';
// import './../App.css';

// DATA
import axios from 'axios';

// STYLE and COMPONENTS
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Form, Button } from 'react-bootstrap'

class NewBeer extends React.Component {

    state = {
        name: ""
    }


    formSubmitHandler = (event) => {
        event.preventDefault()

        axios.post('https://ih-beers-api2.herokuapp.com/beers/new', this.state).then((response) => {
            console.log(response.data)
            this.setState({
                beer: response.data
            })
        })
    }


    changeHandler = (event) => {
        let currentInputValue = event.target.value
        let inputName = event.target.name

        this.setState({
            [inputName]: currentInputValue
        })
    }




    render() {

        return (
            <div>
                <Container>
                    <h1>Add your favourite beer</h1>
                    <Form onSubmit={this.formSubmitHandler}>
                        <Form.Group controlId="name">
                            <Form.Label>Name of the beer</Form.Label>
                            <Form.Control type="text" placeholder="Enter the name" name="name" value={this.state.name} onChange={this.changeHandler} />
                        </Form.Group>
                       <Form.Group controlId="tagline">
                            <Form.Label>Tagline</Form.Label>
                            <Form.Control type="text" placeholder="Enter tagline" name="tagline" value={this.state.tagline} onChange={this.changeHandler}  />
                        </Form.Group>
                        <Form.Group controlId="description">
                            <Form.Label>Description</Form.Label>
                            <Form.Control as="textarea" rows="3" placeholder="Enter desription" name="description" value={this.state.description} onChange={this.changeHandler}  />
                        </Form.Group>
                        <Form.Group controlId="first_brewed">
                            <Form.Label>First Brewed</Form.Label>
                            <Form.Control type="text" placeholder="mm/yyyy" name="first_brewed" value={this.state.first_brewed} onChange={this.changeHandler}  />
                        </Form.Group>
                        <Form.Group controlId="brewers_tips">
                            <Form.Label>Brewers Tips</Form.Label>
                            <Form.Control type="text" placeholder="Enter your tips" name="brewers_tips" value={this.state.brewers_tips} onChange={this.changeHandler}  />
                        </Form.Group>
                        <Form.Group controlId="attenuation_level">
                            <Form.Label>Attenuation level</Form.Label>
                            <Form.Control type="number" placeholder="Enter attenuation level" name="attenuation_level" value={this.state.attenuation_level} onChange={this.changeHandler}  />
                        </Form.Group>
                        <Form.Group controlId="contributed_by">
                            <Form.Label>Enter your name as the contributor</Form.Label>
                            <Form.Control type="text" placeholder="Enter your name" name="contributed_by" value={this.state.contributed_by} onChange={this.changeHandler}  />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Submit beer
                        </Button>
                    </Form>
                </Container>
            </div>
        );
    }
}

export default NewBeer;
