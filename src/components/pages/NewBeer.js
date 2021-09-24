import React, { Component } from 'react'
import { Button, Form } from 'react-bootstrap'
import BeerService from '../../services/beers.service'

export default class NewBeer extends Component {

  state = {
    name: '',
    tagline: '',
    description: '',
    first_brewed: '',
    attenuation_level: '0',
    contributed_by: '',
  }
  
  BeerService = new BeerService()


  handleChange = (e) => {
    const { value, name } = e.target;

    this.setState({
      ...this.state,
      [name]: value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();

    this.BeerService.createBeer(this.state)
      .then(() => {
        this.props.closeModal();
        this.props.refreshCoasters();
        this.setState({
          name: "",
          description: "",
          tagline: "",
          first_brewed: 0,
          attenuation_leve: '',
          contributed_by: '',
        })
      })
      .catch(err => console.error(err))
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
      <h3>New Beer</h3>
      <Form.Group className="mb-3" controlId="name">
        <Form.Label>Nombre: </Form.Label>
        <Form.Control onChange={(e) => this.handleChange(e)} name="name" value={this.state.name} type="text" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="description">
        <Form.Label>Descripción: </Form.Label>
        <Form.Control onChange={(e) => this.handleChange(e)} name="description" value={this.state.description} type="text" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="tagline">
        <Form.Label>Tagline: </Form.Label>
        <Form.Control onChange={(e) => this.handleChange(e)} name="tagline" value={this.state.tagline} type="text" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="first_brewed">
        <Form.Label>First_brewed: </Form.Label>
        <Form.Control onChange={(e) => this.handleChange(e)} name="first_brewed" value={this.state.first_brewed} type="text"/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="attenuation_level">
        <Form.Label>attenuation_level: </Form.Label>
        <Form.Control onChange={(e) => this.handleChange(e)} name="attenuation_level" value={this.state.imageUrl} type="number"/>
      </Form.Group>


      <Button variant="dark" type="submit">
        Submit
      </Button>
    </Form>
    )
  }
}
