import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { Form, Button } from "react-bootstrap"

export default class NewBeer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            tagline: '',
            description: '',
            first_brewed: '',
            brewers_tips: '',
            attenuation_level: 0,
            contributed_by: '',
        };
    }

    handleChange = (element) => {
        this.setState({
            ...this.state,
            [element.target.name]: element.target.value
        })
    }
    handleSubmit = (element) => {
        element.preventDefault();
        axios.post('https://ih-beers-api2.herokuapp.com/beers/new', this.state)
            .then((response) => {
                console.log(response.data)
            })
    }
    render() {
        return (
            <div>
                <header>
                    <Link to={"/"}><img alt="header" src='/header.png' ></img></Link>
                </header>
                <div>
                    <Form className="new-beer">
                        <Form.Group controlId="name">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter beer name" onChange={this.handleChange} value="" />
                        </Form.Group>

                        <Form.Group controlId="tagline">
                            <Form.Label>tagline</Form.Label>
                            <Form.Control type="text" placeholder="tagline" onChange={this.handleChange} value="" />
                        </Form.Group>
                        <Form.Group controlId="description">
                            <Form.Label>description</Form.Label>
                            <Form.Control type="text" placeholder="Be creative with your description" onChange={this.handleChange} value="" />
                        </Form.Group>
                        <Form.Group controlId="first_brewed">
                            <Form.Label>first_brewed</Form.Label>
                            <Form.Control type="text" placeholder="first_brewed" onChange={this.handleChange} value="" />
                        </Form.Group>
                        <Form.Group controlId="brewers_tips">
                            <Form.Label>brewers_tips</Form.Label>
                            <Form.Control type="text" placeholder="Do you have any brewers tips?" onChange={this.handleChange} value="" />
                        </Form.Group>
                        <Form.Group controlId="attenuation_level ">
                            <Form.Label>attenuation_level </Form.Label>
                            <Form.Control type="number" placeholder="Enter attenuation_level" onChange={this.handleChange} value="" />
                        </Form.Group>
                        <Form.Group controlId="contributed_by">
                            <Form.Label>contributed_by</Form.Label>
                            <Form.Control type="text" placeholder="Enter contributor name" onChange={this.handleChange} value="" />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Add new
                    </Button>
                    </Form>
                </div>

            </div>
        )
    }
}
