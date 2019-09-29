import React, { Component } from 'react';
import Navigation from './../components/Navigation';
import Card from 'react-bootstrap/Card';
import { load } from './../services/iron-beer-api';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

export default class SingleBeer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      beer: []
    };
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    // if (prevProps.match.params.id !== id || !this.state.beer)
    load(id)
      .then(beer => {
        this.setState({
          beer
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    const beer = this.state.beer;
    // console.log('Beers new', beer);
    return (
      <Container>
        <Navigation />
        <Card>
          <Row className="SingleBeer">
            <Card.Img src={beer.image_url} style={{ width: '15rem' }} />
          </Row>
          <Card.Body>
            <Card.Title>{beer.name}</Card.Title>
            <Card.Text>{beer.tagline}</Card.Text>
            <Card.Text>{beer.first_brewed}</Card.Text>
            <Card.Text>{beer.attenuation_level}</Card.Text>
            <Card.Text>{beer.description}</Card.Text>
            <Card.Text>
              <strong>Created By: </strong>
              {beer.contributed_by}
            </Card.Text>
          </Card.Body>
        </Card>
      </Container>
    );
  }
}
