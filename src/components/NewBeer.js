import React, { Component } from 'react'
import Navbar from './NavBar';
import BeerService from "../services/beerService";
import { Form, Button } from 'react-bootstrap'

export default class NewBeer extends Component {
  constructor(props) {
    super(props)

    this.state = {
        image_url: "",
        name: "",
        tagline: "",
        first_brewed: "",
        attenuation_level: "",
        description:"",
        contributed_by: ""
    }

    this.service = new BeerService()
  }

  handleSubmit = (e) => {
    e.preventDefault();
    debugger
    this.service.createBeer(this.state)
      .then(response => {
          console.log(response)
        this.props.refreshBeer()
      })
      .catch(err => console.log(err))

  }

  handleInputChange = (e) => {
    const { name, value } = e.currentTarget

    this.setState({ [name]: value })
  }



  render() {
    return (
        <div className="New-Cerve">
      <Navbar/>
      <div>

      <Form.Group className="mb-3" controlId="imageUrl">
          <Form.Label>Url de la imagen</Form.Label>
          <Form.Control onChange={this.handleInputChange} value={this.state.image_url} name="image_url" type="text" />
        </Form.Group>

      <Form onSubmit={this.handleSubmit}>
        <Form.Group controlId="title">
          <Form.Label>Name</Form.Label>
          <Form.Control onChange={this.handleInputChange} value={this.state.name} name="name" type="text" />
        </Form.Group>

        <Form.Group controlId="Tagline">
          <Form.Label>Tagline</Form.Label>
          <Form.Control onChange={this.handleInputChange} value={this.state.tagline} name="tagline" type="text" />
        </Form.Group>

        <Form.Group controlId="First_brewed">
          <Form.Label>First_brewed</Form.Label>
          <Form.Control onChange={this.handleInputChange} value={this.state.first_brewed} name="first_brewed" type="text" />
        </Form.Group>

        <Form.Group controlId="Attenuation_level">
          <Form.Label>Attenuation_level</Form.Label>
          <Form.Control onChange={this.handleInputChange} value={this.state.attenuation_level} name="attenuation_level" type="text" />
        </Form.Group>

        <Form.Group controlId="Description">
          <Form.Label>Description</Form.Label>
          <Form.Control onChange={this.handleInputChange} value={this.state.description} name="description" type="text" />
        </Form.Group>

        <Form.Group controlId="contributed_by">
          <Form.Label>contributed_by</Form.Label>
          <Form.Control onChange={this.handleInputChange} value={this.state.contributed_by} name="contributed_by" type="text" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      </div>
    </div>
    )
  }
}