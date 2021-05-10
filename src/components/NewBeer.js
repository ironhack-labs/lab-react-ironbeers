import React, { Component } from 'react';
import axios from 'axios';
import HomeHeader from './HomeHeader';
import {
  Container,
  Form,
  Input,
  FormGroup,
  Label,
  Button,
  Col,
  Row,
} from 'reactstrap';

export default class NewBeer extends Component {
  state = {
    name: '',
    tagline: '',
    description: '',
    first_brewed: '',
    brewers_tips: '',
    attenuation_level: '',
    contributed_by: '',
  };

  handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post('https://ih-beers-api2.herokuapp.com/beers/new', {
        ...this.state,
      })
      .then((response) => console.log(response))
      .catch((err) => console.log(err));
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    console.log(this.state);

    return (
      <>
        <HomeHeader />
        <Container className="App">
          <h1>Create a new beer!</h1>
          <Row>
            <Col xs="8" style={{ margin: '2em auto' }}>
              <Form
                onSubmit={this.handleSubmit}
                style={{ background: 'lightblue' }}
              >
                <FormGroup>
                  <Label htmlFor="name">Name</Label>
                  <Input
                    onChange={this.handleChange}
                    type="text"
                    name="name"
                    id="name"
                  />
                </FormGroup>

                <FormGroup>
                  <Label htmlFor="tagline">tagline</Label>
                  <Input
                    onChange={this.handleChange}
                    type="text"
                    name="tagline"
                    id="tagline"
                  />
                </FormGroup>

                <FormGroup>
                  <Label htmlFor="description">Description</Label>
                  <Input
                    onChange={this.handleChange}
                    type="textarea"
                    name="description"
                    id="description"
                    cols="30"
                    rows="5"
                  />
                </FormGroup>

                <FormGroup>
                  <Label htmlFor="first_brewed">First Brewed</Label>
                  <Input
                    onChange={this.handleChange}
                    type="text"
                    name="first_brewed"
                    id="first_brewed"
                  />
                </FormGroup>

                <FormGroup>
                  <Label htmlFor="brewers_tips">Brewers Tips</Label>
                  <Input
                    onChange={this.handleChange}
                    type="text"
                    name="brewers_tips"
                    id="brewers_tips"
                  />
                </FormGroup>

                <FormGroup>
                  <Label htmlFor="attenuation_level">Attenuation Level</Label>
                  <Input
                    onChange={this.handleChange}
                    type="number"
                    name="attenuation_level"
                    id="attenuation_level"
                  />
                </FormGroup>

                <FormGroup>
                  <Label htmlFor="contributed_by">Contributed By</Label>
                  <Input
                    onChange={this.handleChange}
                    type="text"
                    name="contributed_by"
                    id="contributed_by"
                  />
                </FormGroup>

                <Button type="submit">ADD NEW</Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}
