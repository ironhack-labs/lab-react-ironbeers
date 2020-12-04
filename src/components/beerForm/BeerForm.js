import React, { Component } from 'react'
import BeerService from './../../service/beers.service'
import Header from './../header/Header'

import { Form, Button } from 'react-bootstrap'
import './BeerForm.css'


class BeerForm extends Component {

    constructor() {
        super()
        this.state = {
            image_url:'',
            name:'',
            tagline:'',
            first_brewed:'',
            attenuation_level:'',
            description:'',
            contributed_by:''
        }
        this.beerService = new BeerService()
    }


    handleInputChange = e => this.setState({ [e.target.name]: e.target.value })


    handleSubmit = e => {
        e.preventDefault()

        this.beerService
            .newBeer(this.state)
            .then(res => {
                this.props.updateList()
                this.props.closeModal()
            })
            .catch(err => console.log(err))
    }


    render() {

        return (
            <>
                <Header/>

                <Form onSubmit={this.handleSubmit}>
                    <Form.Group controlId="name">
                        <Form.Label>Name</Form.Label>
                        <Form.Control className="formField" type="text" name="name" value={this.state.name} onChange={this.handleInputChange}/>
                    </Form.Group>
                    <Form.Group controlId="tagline">
                        <Form.Label>Tagline</Form.Label>
                        <Form.Control className="formField" type="text" name="tagline" value={this.state.tagline} onChange={this.handleInputChange}/>
                    </Form.Group>
                    <Form.Group controlId="description">
                        <Form.Label>Description</Form.Label>
                        <Form.Control className="formField" type="text" name="description" as="textarea" rows={7} value={this.state.description} onChange={this.handleInputChange}/>
                    </Form.Group>
                    <Form.Group controlId="first_brewed">
                        <Form.Label>First brewed</Form.Label>
                        <Form.Control className="formField" type="text" name="first_brewed" value={this.state.first_brewed} onChange={this.handleInputChange}/>
                    </Form.Group>
                    <Form.Group controlId="brewer_tips">
                        <Form.Label>Brewer Tips</Form.Label>
                        <Form.Control className="formField" type="text" name="imageUrl" value={this.state.imageUrl} onChange={this.handleInputChange}/>
                    </Form.Group>
                    <Form.Group controlId="attenuation_level">
                        <Form.Label>Attenuation Level</Form.Label>
                        <Form.Control className="formField" type="number" name="attenuation_level" value={this.state.attenuation_level} onChange={this.handleInputChange}/>
                    </Form.Group>
                    <Form.Group controlId="contributed_by">
                        <Form.Label>Contributed by</Form.Label>
                        <Form.Control className="formField" type="text" name="contributed_by" value={this.state.contributed_by} onChange={this.handleInputChange}/>
                    </Form.Group>
                    <Button className="btn-block formField" variant="primary" type="submit">ADD NEW</Button>
                </Form>
            </>
        )
    }
}



export default BeerForm 
