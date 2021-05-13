import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import BeersService from './../../../services/index';

import Header from '../../resources/Header/Header';

const { Component } = require('react');

class NewBeer extends Component {
  constructor() {
    super();
    this.beerService = new BeersService();
  }

  state = {
    name: '',
    tagline: '',
    description: '',
    first_brewed: '',
    brewers_tips: '',
    attenuation_level: 0,
    contributed_by: '',
  };

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await this.beerService.addBeer(this.state);
      this.props.history.push('/');
    } catch (error) {
      console.error(error);
    }
  };

  render() {
    return (
      <>
        <Header />
        <Container>
          <Row>
            <Col>
              <h1>Add your beer</h1>
            </Col>
          </Row>
          <Row>
            <Col xs={{ span: 8, offset: 2 }}>
              <Form onSubmit={this.handleSubmit}>
                <Form.Group>
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    value={this.state.name}
                    onChange={this.handleInputChange}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Tagline</Form.Label>
                  <Form.Control
                    type="text"
                    name="tagline"
                    value={this.state.tagline}
                    onChange={this.handleInputChange}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Description</Form.Label>
                  <Form.Control
                    type="text"
                    name="description"
                    value={this.state.description}
                    onChange={this.handleInputChange}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>First Brewed</Form.Label>
                  <Form.Control
                    type="text"
                    name="first_brewed"
                    value={this.state.first_brewed}
                    onChange={this.handleInputChange}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Attenuation Level</Form.Label>
                  <Form.Control
                    type="number"
                    name="attenuation_level"
                    value={this.state.attenuation_level}
                    onChange={this.handleInputChange}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Contributed By</Form.Label>
                  <Form.Control
                    type="text"
                    name="contributed_by"
                    value={this.state.contributed_by}
                    onChange={this.handleInputChange}
                  />
                </Form.Group>
                <Button block type="submit">
                  Submit
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default NewBeer;
