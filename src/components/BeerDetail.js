import React, { Component } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import Header from './Header';
import { Card } from 'react-bootstrap';

class BeerDetail extends Component {
  state = {
    detailBeer: {},
  };

  componentDidMount() {
    let id = this.props.match.params.beerId;

    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/${id}`)
      .then((response) => {
        this.setState({
          detailBeer: response.data,
        });
      });
  }

  render() {
    let {
      image_url,
      name,
      tagline,
      first_brewed,
      attenuation_level,
      description,
      contributed_by,
    } = this.state.detailBeer;

    return (
      <div>
        <Header />
        <div>
          <Card style={{ width: '18rem' }}>
            
            <Card.Img className="images" variant="top" src={image_url} />

            <Card.Body>
              <Card.Title>{name}</Card.Title>
              <Card.Text>{tagline}</Card.Text>
              <Card.Text>Attenuation: {attenuation_level}</Card.Text>
              <Card.Text>First Brewed: {first_brewed}</Card.Text>
              <Card.Text>{description}</Card.Text>
              <Card.Text>Creator: {contributed_by}</Card.Text>
            </Card.Body>
          
          </Card>
        </div>
      </div>
    );
  }
}

export default withRouter(BeerDetail);
