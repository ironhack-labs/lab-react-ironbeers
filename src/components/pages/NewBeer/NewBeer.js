import React, { Component } from 'react'
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import BeersService from '../../../services/beers.service';

export default class NewBeer extends Component {
    state = {
        name: "",
        tagline: "",
        description: "",
        first_brewed: "",
        brewers_tips: "",
        attenuation_level: 0,
        contributed_by: "",
    }
    beersService = new BeersService();


    handleChange = (e) => {
        const { value, name } = e.target

        this.setState({
            ...this.state,
            [name]: value
        })
    }


    handleSubmit = (e) => {
        e.preventDefault()
        this.beersService.createBeer(this.state)
            .then(() => {
                this.setState({
                    name: "",
                    tagline: "",
                    description: "",
                    first_brewed: "",
                    brewers_tips: "",
                    attenuation_level: 0,
                    contributed_by: "",
                })
            })
            .catch(err => console.log(err))
    }


    render() {
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-10">

                        <Form onSubmit={this.handleSubmit}>

                            <Form.Group className="mb-3" controlId="name">
                                <Form.Label>Name: </Form.Label>
                                <Form.Control className="rounded-pill" onChange={(e) => this.handleChange(e)} name="name" value={this.state.name} type="text" placeholder="Enter Beer's name" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="tagline">
                                <Form.Label>Tagline: </Form.Label>
                                <Form.Control className="rounded-pill" onChange={(e) => this.handleChange(e)} name="tagline" value={this.state.tagline} type="text" placeholder="Enter Beer's tagline" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="description">
                                <Form.Label>Description: </Form.Label>
                                <Form.Control className="rounded-pill" onChange={(e) => this.handleChange(e)} name="description" value={this.state.description} type="text" placeholder="Enter description" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="first_brewed">
                                <Form.Label>First_brewed: </Form.Label>
                                <Form.Control className="rounded-pill" onChange={(e) => this.handleChange(e)} name="first_brewed" value={this.state.first_brewed} type="text" placeholder="Enter first_brewed" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="brewers_tips">
                                <Form.Label>Brewers_tips: </Form.Label>
                                <Form.Control className="rounded-pill" onChange={(e) => this.handleChange(e)} name="brewers_tips" value={this.state.brewers_tips} type="text" placeholder="Enter brewers_tips" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="attenuation_level">
                                <Form.Label>Attenuation level: </Form.Label>
                                <Form.Control className="rounded-pill" onChange={(e) => this.handleChange(e)} name="attenuation_level" value={this.state.attenuation_level} type="number" placeholder="Enter attenuation_level" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="contributed_by">
                                <Form.Label>Contributed by: </Form.Label>
                                <Form.Control className="rounded-pill" onChange={(e) => this.handleChange(e)} name="contributed_by" value={this.state.contributed_by} type="text" placeholder="Enter contributed_by" />
                            </Form.Group>
                            <Link to="/beers">
                                <div className="row mx-1 mt-5">
                                    <Button className="rounded-pill" variant="primary" type="submit">
                                        Submit
                                    </Button>
                                </div>
                            </Link>
                        </Form>
                    </div>
                </div>
            </div>
        )
    }
}
