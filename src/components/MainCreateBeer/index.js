import React, {Component} from 'react'

import BeerService from "../../services/BeerServices"
import NavBar from "../../components/Ui/Navbar"

import "./MainCreateBeer.css"

import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Button from "react-bootstrap/Button"


class BeerForm extends Component {
    constructor (){
        super ()
        this.state = {
            name: "",
            tagline: "",
            description: "",
            first_brewed: "",
            brewer_tips: "",
            attenuation_level: "",
            contributed_by: "",
            
        }
        this.BeerService = new BeerService()
    }
    handleInputChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }
    handleFormSubmit = e => {
        e.preventDefault()
        this.BeerService
            .createBeer(this.state)
            .then(() => this.setState({
                name: "",
                tagline: "",
                description: "",
                first_brewed: "",
                brewer_tips: "",
                attenuation_level: "",
                contributed_by: ""
            }))
            .catch(err => console.log(err))
    }
    render () {
        return (
            <>
                <NavBar />
                <Container as="main">
                    <Form className="search-bar" onSubmit={this.handleFormSubmit}>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Name</Form.Label>
                            <Form.Control onChange={this.handleInputChange} type="text" name="name" value={this.state.name} />
                            <Form.Label>Tagline</Form.Label>
                            <Form.Control onChange={this.handleInputChange} name="tagline" type="text" value={this.state.tagline}/>
                            <Form.Label>Description</Form.Label>
                            <Form.Control as="textarea" onChange={this.handleInputChange} className="text-area" name="description" value={this.state.description} />
                            <Form.Label>First brewed</Form.Label>
                            <Form.Control onChange={this.handleInputChange} name="first_brewed" type="text" value={this.state.first_brewed} />
                            <Form.Label>Brewer tips</Form.Label>
                            <Form.Control onChange={this.handleInputChange} type="text" name="brewer_tips" value={this.state.brewer_tips} />
                            <Form.Label>Attenuation level</Form.Label>
                            <Form.Control onChange={this.handleInputChange} name="attenuation_level" type="number" value={this.state.attenuation_level} />
                            <Form.Label>Contributed</Form.Label>
                            <Form.Control onChange={this.handleInputChange} name="contributed_by" type="text" value={this.state.contributed_by} />
                            <Button className="rounded-btn" variant="primary" type="submit">ADD NEW!</Button>
                        </Form.Group>
                    </Form>
                </Container>
            </>
        )
    }
}

export default BeerForm