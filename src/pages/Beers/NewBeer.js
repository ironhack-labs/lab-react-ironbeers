import Button from '@restart/ui/esm/Button'
import React, { Component } from 'react'
import { Form, Container } from 'react-bootstrap'
import BeerService from '../../services/BeerService'
import NavbarBeer from '../../components/Navbar/NavbarBeer'

export default class NewBeer extends Component {
    state = {
        image_url: "",
        name: "",
        tagline: "",
        description: "",
        first_brewed: "",
        brewers_tips: "",
        attenuation_level: "",
        contributed_by: "",
    }
    beerService = new BeerService()

    handleChange = (e) => {
        const { value, name } = e.target;

        this.setState({
            ...this.state,
            [name]: value
        })
        console.log(this.state)
    }
    handleSubmit = (e) => {
        e.preventDefault();

        this.beerService.createBeer(this.state)
            .then(() => {
                this.setState({
                    imagen_url: "",
                    name: "",
                    tagline: "",
                    description: "",
                    first_brewed: "",
                    brewed_tips: "",
                    attenuation_level: 0,
                    contribued_by: "",
                })
            })
            .catch(err => console.error(err))
    }
    render() {
        return (
            <>
                <NavbarBeer />
                <Container className="p-4">

                    <Form onSubmit={this.handleSubmit}>
                        <Form.Group className="mb-3" controlId="imageUrl">
                            <Form.Label>Imagen: </Form.Label>
                            <Form.Control onChange={(e) => this.handleChange(e)} name="image_url" value={this.state.image_url} type="text" placeholder="Imagen" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="name">
                            <Form.Label>Name: </Form.Label>
                            <Form.Control onChange={(e) => this.handleChange(e)} name="name" value={this.state.name} type="text" placeholder="Name" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="tagline">
                            <Form.Label>Tagline: </Form.Label>
                            <Form.Control onChange={(e) => this.handleChange(e)} name="tagline" value={this.state.tagline} type="text" placeholder="Tagline" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="first_brewed">
                            <Form.Label>First brewed: </Form.Label>
                            <Form.Control onChange={(e) => this.handleChange(e)} name="first_brewed" value={this.state.first_brewed} type="text" placeholder="First brewed" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="brewers_tips">
                            <Form.Label>Brewers tips: </Form.Label>
                            <Form.Control onChange={(e) => this.handleChange(e)} name="brewers_tips" value={this.state.brewers_tips} type="text" placeholder="Brewers tips" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="attenuation_level">
                            <Form.Label>Attenuation level: </Form.Label>
                            <Form.Control onChange={(e) => this.handleChange(e)} name="attenuation_level" value={this.state.attenuation_level} type="number" placeholder="attenuation" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="contributed_by">
                            <Form.Label>Contributed by: </Form.Label>
                            <Form.Control onChange={(e) => this.handleChange(e)} name="contributed_by" value={this.state.contributed_by} type="text" placeholder="contributed by" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Container>
            </>
        )
    }
}
