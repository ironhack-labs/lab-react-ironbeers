import NavBar from '../Navbar/Navbar'
import React, { Component } from 'react'
import BeerServices from './../../../service/beer.service'

import { Container, Row, Col, Form, Button } from 'react-bootstrap'

class NewBeer extends Component {

    constructor() {
        super()
        this.state = {
            name: '',
            tagline: '',
            description: '',
            first_brewed: '',
            brewers_tip: '',
            attenuation_level: '',
            contributed_by: ''
        }
        this.beersService = new BeerServices()
    }

    handleInputChange = e => this.setState({ [e.target.name]: e.target.value })

    handleSubmit = e => {
        e.preventDefault()

        this.beersService
            .newBeer(this.state)
            .then(res => {
                this.props.updateList()

            })
            .catch(err => console.log(err))
    }


    render() {

        return (
            <>
                <NavBar />
                <Container>
                <h1>Nueva cerveza</h1>
                <hr />

                <Form onSubmit={this.handleSubmit}>
                    <Form.Group controlId="name">
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control type="text" name="name" value={this.state.name} onChange={this.handleInputChange} />
                    </Form.Group>
                    <Form.Group controlId="tagline">
                        <Form.Label>Eslogan</Form.Label>
                        <Form.Control type="text" name="tagline" value={this.state.tagline} onChange={this.handleInputChange} />
                    </Form.Group>
                    <Form.Group controlId="description">
                        <Form.Label>Descripción</Form.Label>
                        <Form.Control type="text" name="description" value={this.state.description} onChange={this.handleInputChange} />
                    </Form.Group>
                    <Form.Group controlId="first_brewed">
                        <Form.Label>Hecha en: </Form.Label>
                        <Form.Control type="text" name="first_brewed" value={this.state.first_brewed} onChange={this.handleInputChange} />
                    </Form.Group>
                    <Form.Group controlId="brewers_tip">
                        <Form.Label>Consejo</Form.Label>
                        <Form.Control type="text" name="brewers_tip" value={this.state.brewers_tips} onChange={this.handleInputChange} />
                    </Form.Group>
                    <Form.Group controlId="attenuation_level">
                        <Form.Label>Grados</Form.Label>
                            <Form.Control type="number" name="attenuation_level" value={this.state.attenuation_level} onChange={this.handleInputChange} />
                    </Form.Group>
                    <Form.Group controlId="contributed_by">
                        <Form.Label>Hecha por: </Form.Label>
                        <Form.Control type="text" name="contributed_by" value={this.state.contributed_by} onChange={this.handleInputChange} />
                    </Form.Group>
                    <Button variant="dark" type="submit">Crear cerveza</Button>
                    </Form>
                </Container>
            </>
        )
    }
}

export default NewBeer