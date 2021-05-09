import React from 'react';
import axios from 'axios';
import { Form, Button } from 'react-bootstrap'


export default class NewBeer extends React.Component {
  state = {
    message: null
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const { name, tagline, description, first_brew, attenuation_level, contributed_by } = e.target;
    if (!name.value.length) {
      this.setState({
        message: 'name cannot be empty'
      })
    } else {
      axios.post('https://ih-beers-api2.herokuapp.com/beers/new', {
        name: name.value,
        tagline: tagline.value,
        description: description.value,
        first_brew: first_brew.value,
        attenuation_level: attenuation_level.value,
        contributed_by: contributed_by.value
      })
        .then(response => {
          this.setState({
            message: response.data.message
          })
        })
    }
  }

  render() {
    return (
      <section>
        <Form onSubmit={ this.handleSubmit }>
          <legend>New Beer</legend>
          <Form.Group >
            <Form.Label htmlFor="name">Name: </Form.Label>
            <Form.Control id="name" name="name" type="text" />
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor="tagline">Tagline: </Form.Label>
            <Form.Control id="tagline" name="tagline" type="text" />
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor="descripton">Descripton: </Form.Label>
            <Form.Control id="descripton" name="description" as="textarea" />
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor="first_brew">First brew: </Form.Label>
            <Form.Control id="first_brew" name="first_brew" type="text" />
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor="attenuation_level">Attenuation level: </Form.Label>
            <Form.Control id="attenuation_level" name="attenuation_level" type="number" />
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor="contributed_by">Contributed by: </Form.Label>
            <Form.Control id="contributed_by" name="contributed_by" type="text" />
          </Form.Group>
          <div>
            <Button type="submit">create new beer <span role="img" aria-label="beer">🍺</span></Button>
          </div>
          { this.state.message && <p>{ this.state.message }</p> }
        </Form>

      </section>
    )
  }
}
