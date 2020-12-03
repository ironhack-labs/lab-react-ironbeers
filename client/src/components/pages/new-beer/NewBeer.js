import React, { Component } from 'react'
import { withRouter } from 'react-router';
import BeerService from '../../../service/beers-service'
import Header from '../../shared/Header'

import { Container, Row, Col, Form, Button } from 'react-bootstrap'

class NewBeer extends Component {
  constructor () {
    super()
    this.state = {
      name: '',
      tagline: '',
      description: '',
      first_brewed: '',
      brewers_tips: '',
      attenuation_level: '',
      contributed_by: ''
    }
    this.beerService = new BeerService()
  }

  handleInputChange = e => this.setState({ [e.target.name]: e.target.value })

  handleSubmit = e => {
    e.preventDefault()

    this.beerService
      .createBeer(this.state)
      .then(res => {
        this.setState({
            name: '',
            tagline: '',
            description: '',
            first_brewed: '',
            brewers_tips: '',
            attenuation_level: '',
            contributed_by: ''
        })
      })
      .catch(err => console.log(err))
    
    this.props.history.push('/beers');
  }

  render() {
    return (
      <>
        <Header />
        <Container>
          <Row className="justify-content-center mt-4">
            <Col xs={8}>
              <h1>Brew new Beer</h1>

              <hr />
              <Form onSubmit={this.handleSubmit}>
                <Form.Group controlId="name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" name="name" value={this.state.name} onChange={this.handleInputChange} />
                </Form.Group>
                <Form.Group controlId="tagline">
                    <Form.Label>Tagline</Form.Label>
                    <Form.Control type="text" name="tagline" value={this.state.tagline} onChange={this.handleInputChange} />
                </Form.Group>
                <Form.Group controlId="description">
                    <Form.Label>Description</Form.Label>
                    <Form.Control type="text" name="description" value={this.state.description} onChange={this.handleInputChange} />
                </Form.Group>
                <Form.Group controlId="first_brewed">
                    <Form.Label>First Brewed</Form.Label>
                    <Form.Control type="text" name="first_brewed" value={this.state.first_brewed} onChange={this.handleInputChange} />
                </Form.Group>
                <Form.Group controlId="attenuation_level">
                    <Form.Label>Attenuation Level</Form.Label>
                    <Form.Control type="number" name="attenuation_level" value={this.state.attenuation_level} onChange={this.handleInputChange} />
                </Form.Group>
                  <Button variant="warning" type="submit">Create Beer</Button>
              </Form>
            </Col>
          </Row>

        </Container>
      </>
    )
  }
}

export default withRouter(NewBeer)