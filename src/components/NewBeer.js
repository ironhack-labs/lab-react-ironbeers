import React from 'react';
import { Form, Button } from 'react-bootstrap';
import Nav from './Nav'

export default function AddBeer(props) {
  return (
    <div className="under-nav">
      <Nav />
      <Form onSubmit={props.onSubmit}>
        <Form.Group>
          <Form.Label>Name</Form.Label>
          <Form.Control name="name" type="text" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Tagline</Form.Label>
          <Form.Control name="tagline" type="text" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Description</Form.Label>
          <Form.Control name="description" type="text" />
        </Form.Group>
        <Form.Group>
          <Form.Label>First Brewed</Form.Label>
          <Form.Control name="first_brewed" type="text" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Brewer's Tips</Form.Label>
          <Form.Control name="brewers_tips" type="text" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Attenuation Level</Form.Label>
          <Form.Control name="attenuation_level" type="number" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Contributed By</Form.Label>
          <Form.Control name="contributed_by" type="text" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}
