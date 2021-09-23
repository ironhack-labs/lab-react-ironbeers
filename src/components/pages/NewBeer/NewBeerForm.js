import React from "react";
import { Form, Button, Container } from "react-bootstrap";
import BeersService from "../../../services/beers.service";
import { Redirect } from 'react-router-dom';


class NewBeerForm extends React.Component {

    state = {
        beer: {
            name: "",
            tagline: "",
            description: "",
            first_brewed: "",
            brewers_tips: "",
            attenuation_level: 0,
            contributed_by: ""
        },
        redirect: false
    }

    beerService = new BeersService()

    handleChange = (e) => {
        const { value, name } = e.target;

        this.setState( prevState => ({
            ...prevState,
            beer: {
                ...prevState.beer,
                [name]: value
            }
        }))
    }

    handleSubmit = (e) => {
        e.preventDefault()

        this.beerService
        .createBeer(this.state.beer)
        .then((beer) => {
                this.setState({
                    ...this.state,
                    redirect: true
                })
            })
        .catch((err) => console.error(err))
    }

    render() {
        return (
            <Container>
                <h1 className="text-center mt-4">Create your own beer</h1>
                {this.state.redirect && <Redirect to="/" />}
                <Form onSubmit={this.handleSubmit} className="p-3">
                    <Form.Group className="mb-3" controlId="name">
                        <Form.Label>Name</Form.Label>
                        <Form.Control onChange={(e) => this.handleChange(e)} type="text" name="name" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="tagline">
                        <Form.Label>Tag Line</Form.Label>
                        <Form.Control onChange={(e) => this.handleChange(e)} type="text" name="tagline" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="description">
                        <Form.Label>Description</Form.Label>
                        <Form.Control onChange={(e) => this.handleChange(e)} as="textarea" rows={3} type="text" name="description" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="first_brewed">
                        <Form.Label>First Brewed</Form.Label>
                        <Form.Control onChange={(e) => this.handleChange(e)} type="text" name="first_brewed" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="brewers_tips">
                        <Form.Label>Brewers Tips</Form.Label>
                        <Form.Control onChange={(e) => this.handleChange(e)} type="text" name="brewers_tips" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="attenuation_level">
                        <Form.Label>Attenuation Level</Form.Label>
                        <Form.Control onChange={(e) => this.handleChange(e)} type="text" name="attenuation_level" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="contributed_by">
                        <Form.Label>Contributed By</Form.Label>
                        <Form.Control onChange={(e) => this.handleChange(e)} type="text" name="contributed_by" />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Add new
                    </Button>
                </Form>
            </Container>
        );
    }
    
}

export default NewBeerForm;