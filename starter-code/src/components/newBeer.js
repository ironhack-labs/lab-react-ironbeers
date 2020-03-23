import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';

import axios from 'axios';

class RandomBeer extends Component {

  constructor() {
    super()
    this.state = {
      name: "",
      tagline: "",
      description: "",
      first_brewed: "",
      brewers_tips: "",
      attenuation_level: "",
      contributed_by: ""
    }

  }


  handleNameInput = event => {
    this.setState({
      name: event.target.value
    })
  }

  handleTaglineInput = event => {
    this.setState({
      tagline: event.target.value
    })
  }

  handleDescriptionInput = event => {
    this.setState({
      description: event.target.type
    })
  }

  handleFirstBrewedInput = event => {
    this.setState({
      first_brewed: event.target.value
    })
  }

  handleBrewersTipsInput = event => {
    this.setState({
      brewers_tips: event.target.value
    })
  }

  handleAttenuationLevelInput = event => {
    this.setState({
      attenuation_level: event.target.value
    })
  }

  handleContributedByInput = event => {
    this.setState({
      contributed_by: event.target.value
    })
  }

  handleFormSubmit = (event) => {
    console.log("ENTERING SUBMIT---this is the event", event)
    console.log("ENTERING SUBMIT---this is the state", this.state)
    event.preventDefault();

    axios.post("https://ih-beers-api2.herokuapp.com/beers/new", this.state)
      .then(response => {
        console.log("This is the response of the API when NEW BEER", response.data)
        this.setState({ randomBeer: response.data })

      })
    console.log("SALIENDO SUBMIT----------------------------------------***********************", event)

  }


  render() {
    console.log("This is this.state in render()", this.state)
    return (

      <div style={{ paddingLeft: 200, paddingTop: 100, width: 800 }}>
        <Form onSubmit={this.handleFormSubmit}>
          <Form.Group>
            <Form.Control size="lg" name="name" value={this.state.name} type="text" placeholder="Name" onChange={e => this.handleNameInput(e)} />
            <br />
            <Form.Control size="lg" name="tagline" value={this.state.tagline} type="text" placeholder="Tagline" onChange={e => this.handleTaglineInput(e)} />
            <br />
            <Form.Control size="lg" name="description" value={this.state.description} type="text" placeholder="Description" onChange={e => this.handleDescriptionInput(e)} />
            <br />
            <Form.Control name="first_brewed" value={this.state.first_brewed} size="lg" type="text" placeholder="First Brewed" onChange={e => this.handleFirstBrewedInput(e)} />
            <br />
            <Form.Control name="brewers_tips" value={this.state.brewers_tips} size="lg" type="text" placeholder="Brewers Tips" onChange={e => this.handleBrewersTipsInput(e)} />
            <br />
            <Form.Control name="attenuation_level" value={this.state.attenuation_level} size="lg" type="text" placeholder="Attenuation Level (number)" onChange={e => this.handleAttenuationLevelInput(e)} />
            <br />
            <Form.Control name="contributed_by" value={this.state.contributed_by} size="lg" type="text" placeholder="Contributed By" onChange={e => this.handleContributedByInput(e)} />
            <br />
          </Form.Group>
          <Button type="submit" value="Submit" variant="primary">Add New</Button>{' '}
        </Form>

      </div>
    );
  }
}

export default RandomBeer;