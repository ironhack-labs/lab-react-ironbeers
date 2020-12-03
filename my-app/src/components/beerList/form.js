import React, { Component } from 'react'
import beersService from './../../service/service'
import {Link} from 'react-router-dom'
import { Container,Form, Button } from 'react-bootstrap'

class beerForm extends Component {

    constructor() {
        super()
        this.state = {
            name: '',
            description: '',
            image_url: ''
        }
        this.beersService = new beersService()
    }

    handleInputChange = e => this.setState({ [e.target.name]: e.target.value })

    handleSubmit = e => {
        e.preventDefault()

        this.beersService
            .saveBeer(this.state)
            .then(res => {
        
                this.props.updateList()
                this.props.closeModal()
            })
            .catch(err => console.log(err))
    }


    render() {

        return (
            <>
                <h1>New beer</h1>
                <hr />
<Container>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group controlId="title">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" name="name" value={this.state.title} onChange={this.handleInputChange} />
                    </Form.Group>
                    <Form.Group controlId="description">
                        <Form.Label>Description</Form.Label>
                        <Form.Control type="text" name="description" value={this.state.description} onChange={this.handleInputChange} />
                    </Form.Group>
             
                    <Form.Group controlId="image_url">
                        <Form.Label>Image (URL)</Form.Label>
                        <Form.Control type="text" name="image_url" value={this.state.image_url} onChange={this.handleInputChange} />
                    </Form.Group>
                        <Button variant="dark" type="submit">Create beer</Button>
                        <br/><br/>
                        <Link to='/'>Return</Link>
                </Form>
            </Container></>
        )
    }
}

export default beerForm