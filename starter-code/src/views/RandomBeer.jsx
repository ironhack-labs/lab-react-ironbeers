import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import { randomBeer } from '../services/iron-beer-api';
import Navigation from '../components/Navigation';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

export default class RandomBeer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      randomBeer: []
    };
  }

  componentDidMount() {
    randomBeer()
      .then(randomBeer => {
        this.setState({
          randomBeer
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    const randomBeer = this.state.randomBeer;
    return (
      <Container>
        <Navigation />
        <Card>
          <Row className="SingleBeer">
            <Card.Img src={randomBeer.image_url} style={{ width: '15rem' }} />
          </Row>
          <Card.Body>
            <Card.Title>{randomBeer.name}</Card.Title>
            <Card.Text>{randomBeer.tagline}</Card.Text>
            <Card.Text>{randomBeer.first_brewed}</Card.Text>
            <Card.Text>{randomBeer.attenuation_level}</Card.Text>
            <Card.Text>{randomBeer.description}</Card.Text>
            <Card.Text>
              <strong>Created By: </strong>
              {randomBeer.contributed_by}
            </Card.Text>
          </Card.Body>
        </Card>
      </Container>
    );
  }
}
