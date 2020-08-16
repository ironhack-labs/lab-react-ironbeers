import React, { Component } from 'react'
import NaviBar from './Navbar'
import axios from 'axios'
import { Form, FormGroup, FormControl, Button } from 'react-bootstrap'

export default class NewBeer extends Component {
    state = {
        name: '',
        tagline: '',
        description: '',
        first_brewed: '',
        brewer_tips: '',
        attenuation_level: 0,
        contributed_by: ''
    };

    handleChange = event => {
        const {name, value} = event.target;
        this.setState({ [name]: value})
    };

    handleFormSubmit = event => {
        event.preventDefault();
        axios
        .post('https://ih-beers-api2.herokuapp.com/beers/new', this.state)
        .then((responseFromApi) => {
            console.log(responseFromApi.data)
        })
        .catch((err) => console.log('Error while creating a new beer', err))
    }


    render() {
        return (
            <div>
                <NaviBar />
                <Form className="add-new-form" onSubmit={this.handleFormSubmit}>
                    <FormGroup>
                        <Form.Label>Name</Form.Label>
                        <FormControl onChange={e => this.handleChange(e)} value={this.state.name} type='text' name='name'></FormControl>
                    </FormGroup>
                    <FormGroup>
                        <Form.Label>Tagline</Form.Label>
                        <FormControl onChange={e => this.handleChange(e)} value={this.state.tagline} type='text' name='tagline'></FormControl>
                    </FormGroup>
                    <FormGroup>
                        <Form.Label>Description</Form.Label>
                        <FormControl onChange={e => this.handleChange(e)} value={this.state.description} type='text' name='description'></FormControl>
                    </FormGroup>
                    <FormGroup>
                        <Form.Label>First brewed</Form.Label>
                        <FormControl onChange={e => this.handleChange(e)} value={this.state.first_brewed} type='text' name='first_brewed'></FormControl>
                    </FormGroup>
                    <FormGroup>
                        <Form.Label>Brewer tips</Form.Label>
                        <FormControl onChange={e => this.handleChange(e)} value={this.state.brewer_tips} type='text' name='brewer_tips'></FormControl>
                    </FormGroup>
                    <FormGroup>
                        <Form.Label>Attenuattion level</Form.Label>
                        <FormControl onChange={e => this.handleChange(e)} value={this.state.attenuation_level} type='number' name='attenuation_level'></FormControl>
                    </FormGroup>
                    <FormGroup>
                        <Form.Label>Contributed by</Form.Label>
                        <FormControl onChange={e => this.handleChange(e)} value={this.state.contributed_by} type='text' name='contributed_by'></FormControl>
                    </FormGroup>
                    <Button type="submit">ADD NEW</Button>
                </Form>
            </div>
        )
    }
}

