import React, { Component } from 'react'
import { Form, Button } from 'react-bootstrap'
import axios from 'axios'

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
            contributed_by: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event) {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        })
    }

    handleSubmit(event) {
        event.preventDefault();
        const name = this.state.name;
        const tagline = this.state.tagline;
        const description = this.state.description;
        const first_brewed = this.state.first_brewed;
        const brewers_tips = this.state.brewers_tips;
        const attenuation_level = this.state.attenuation_level;
        const contributed_by = this.state.contributed_by;

        axios.post('https://ih-beers-api2.herokuapp.com/beers/new', { name, tagline, description, first_brewed, attenuation_level, brewers_tips, contributed_by })
            .then((response) => {
                this.props.history.push("/")
            })
            .catch(error => console.log(error))
    }

    render() {
        console.log("NewBeer component state:", this.state)

        return (
            <div>
                <Form onSubmit={this.handleSubmit} className="mx-5">
                    <Form.Group>
                        <Form.Label>Name</Form.Label>
                        <Form.Control name="name" onChange={event => this.handleChange(event)} type="text" />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Tagline</Form.Label>
                        <Form.Control name="tagline" onChange={event => this.handleChange(event)} type="text" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Description</Form.Label>
                        <Form.Control name="description" as="textarea" rows="8" onChange={event => this.handleChange(event)} type="text" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>first_brewed</Form.Label>
                        <Form.Control name="first_brewed" onChange={event => this.handleChange(event)} type="text" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>brewers_tips</Form.Label>
                        <Form.Control name="brewers_tips" onChange={event => this.handleChange(event)} type="text" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>attenuation_level</Form.Label>
                        <Form.Control name="attenuation_level" onChange={event => this.handleChange(event)} type="number" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>contributed_by</Form.Label>
                        <Form.Control name="contributed_by" onChange={event => this.handleChange(event)} type="text" />
                    </Form.Group>
                    <Button className="submit" type="submit">Submit</Button>
                </Form>
            </div>
        )
    }
}
