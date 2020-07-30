import React, { useState } from 'react';
import NavigationBar from './NavigationBar';
import { Container, Row, Col, Form, Button, Toast } from 'react-bootstrap';
import Axios from 'axios';

const NewBeerPage = () => {
  const initialState = {
    formData: {
      name: '',
      tagline: '',
      description: '',
      first_brewed: '',
      brewers_tips: '',
      attenuation_level: 0,
      contributed_by: '',
    },
    isSubmitted: false,
  };
  const [state, setState] = useState(initialState);
  const handleChange = (e) => {
    setState({
      ...state,
      formData: { ...state.formData, [e.target.name]: e.target.value },
    });
  };
  const submitNewBeer = () => {
    Axios.post(
      'https://ih-beers-api2.herokuapp.com/beers/new',
      state.formData
    ).then(() => {
      console.log('new beer created');
      setState({
        formData: {
          name: '',
          tagline: '',
          description: '',
          first_brewed: '',
          brewers_tips: '',
          attenuation_level: 0,
          contributed_by: '',
        },
        isSubmitted: true,
      });
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    submitNewBeer();
  };
  const toast = (
    <Toast
      onClose={() => setState({ ...state, isSubmitted: false })}
      show={state.isSubmitted}
      delay={3000}
      autohide
    >
      <Toast.Header>
        <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" />
        <strong className="mr-auto">IronBeers</strong>
        <small>5 secs ago</small>
      </Toast.Header>
      <Toast.Body>Woohoo, your new beer has been submitted!</Toast.Body>
    </Toast>
  );
  return (
    <div>
      <NavigationBar />
      <Container className="mt-5">
        <Row>
          <Col lg={12}>
            {state.isSubmitted ? toast : null}
            <Form onSubmit={handleSubmit}>
              <Form.Group>
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  placeholder="Enter beer name"
                  onChange={handleChange}
                  value={state.formData.name}
                ></Form.Control>
              </Form.Group>
              <Form.Group>
                <Form.Label>Tagline</Form.Label>
                <Form.Control
                  type="text"
                  name="tagline"
                  placeholder="Enter beer tagline"
                  onChange={handleChange}
                  value={state.formData.tagline}
                ></Form.Control>
              </Form.Group>
              <Form.Group>
                <Form.Label>Description</Form.Label>
                <Form.Control
                  as="textarea"
                  rows="3"
                  name="description"
                  placeholder="Enter beer description"
                  onChange={handleChange}
                  value={state.formData.description}
                ></Form.Control>
              </Form.Group>
              <Form.Group>
                <Form.Label>First Brewed</Form.Label>
                <Form.Control
                  type="text"
                  name="first_brewed"
                  placeholder="Enter first brewed date"
                  onChange={handleChange}
                  value={state.formData.first_brewed}
                ></Form.Control>
              </Form.Group>
              <Form.Group>
                <Form.Label>Brewers Tips</Form.Label>
                <Form.Control
                  type="text"
                  name="brewers_tips"
                  placeholder="Enter brewers tips"
                  onChange={handleChange}
                  value={state.formData.brewers_tips}
                ></Form.Control>
              </Form.Group>
              <Form.Group>
                <Form.Label>Attenuation Level</Form.Label>
                <Form.Control
                  type="number"
                  name="attenuation_level"
                  placeholder="Enter attenuation level"
                  onChange={handleChange}
                  value={state.formData.attenuation_level}
                ></Form.Control>
              </Form.Group>
              <Form.Group>
                <Form.Label>Contributed by</Form.Label>
                <Form.Control
                  type="text"
                  name="contributed_by"
                  placeholder="Enter contributor name"
                  onChange={handleChange}
                  value={state.formData.contributed_by}
                ></Form.Control>
              </Form.Group>
              <Button variant="primary" type="submit">
                Create new beer
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default NewBeerPage;
