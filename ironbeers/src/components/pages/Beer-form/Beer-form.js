import React, { Component } from 'react'
import BeerService from './../../../service/beers.service'
import { Redirect } from "react-router-dom"

import './beer-form.css'

import { Container, Row, Col, Form, Button } from 'react-bootstrap'

class BeerForm extends Component {

    constructor() {
        super()
        this.state = {
            name: '',
            tagline: '',
            description: '',
            first_brewed: '',
            brewers_tips: '',
            attenuation_level: '',
            contributed_by: '',
            redirect: null
        }

        this.beerService = new BeerService()
    }

    handleInputChange = e => this.setState({ [e.target.name]: e.target.value })

    redirectAfter = () => this.setState({ redirect: '/beers' })

    handleSubmit = e => {

        e.preventDefault()

        this.beerService
            .createNew(this.state)
            .then(res => {
                console.log(res)
                this.setState({
                    name: '',
                    tagline: '',
                    description: '',
                    first_brewed: '',
                    brewers_tips: '',
                    attenuation_level: '',
                    contributed_by: '',
                })

                this.redirectAfter()

            })
            .catch(err => console.log(err))
    }


    render() {

        if (this.state.redirect) {

            return <Redirect to={this.state.redirect} />

        } else {
            return (

                <>
                    <Container className="beer-form">

                        <Row>

                            <Col md={{ span: 6, offset: 3 }} >

                                <h1>Nueva cerveza</h1>
                                <hr />

                                <Form onSubmit={this.handleSubmit}>
                                    <Form.Group controlId="name">
                                        <Form.Label>Nombre</Form.Label>
                                        <Form.Control type="text" name="name" value={this.state.name} onChange={this.handleInputChange} />
                                    </Form.Group>
                                    <Form.Group controlId="tagline">
                                        <Form.Label>Breve descripción</Form.Label>
                                        <Form.Control type="text" name="tagline" value={this.state.tagline} onChange={this.handleInputChange} />
                                    </Form.Group>
                                    <Form.Group controlId="description">
                                        <Form.Label>Descripción</Form.Label>
                                        <Form.Control type="text" name="description" value={this.state.description} onChange={this.handleInputChange} />
                                    </Form.Group>
                                    <Form.Group controlId="first_brewed">
                                        <Form.Label>Año de fabricación</Form.Label>
                                        <Form.Control type="first_brewed" name="first_brewed" value={this.state.first_brewed} onChange={this.handleInputChange} />
                                    </Form.Group>
                                    <Form.Group controlId="brewers_tips">
                                        <Form.Label>Descripciones cualitativas</Form.Label>
                                        <Form.Control type="text" name="brewers_tips" value={this.state.brewers_tips} onChange={this.handleInputChange} />
                                    </Form.Group>
                                    <Form.Group controlId=" attenuation_level">
                                        <Form.Label>Nivel de atenuación</Form.Label>
                                        <Form.Control type="number" name="attenuation_level" value={this.state.attenuation_level} onChange={this.handleInputChange} />
                                    </Form.Group>
                                    <Form.Group controlId="contributed_by">
                                        <Form.Label>Usuario que lo crea</Form.Label>
                                        <Form.Control type="text" name="contributed_by" value={this.state.contributed_by} onChange={this.handleInputChange} />
                                    </Form.Group>
                                    <Button variant="info" type="submit">Crear cerveza</Button>
                                </Form>
                            </Col>
                        </Row>
                    </Container>
                </>
            )
        }

    }
}

export default BeerForm
