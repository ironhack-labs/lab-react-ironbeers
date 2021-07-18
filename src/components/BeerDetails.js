import React, { Component } from 'react';
import axios from 'axios';
import { Spinner } from 'react-bootstrap';

export default class BeerDetails extends Component {
  state = {
    beerDetails: null,
  };

  async componentDidMount() {
    try {
      let { beerId } = this.props.match.params;
      await axios
        .get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
        .then((res) => {
          this.setState({
            beerDetails: res.data,
          });
        });
    } catch (err) {
      console.log('Beer fetch failed', err);
    }
  }

  render() {
    if (!this.state.beerDetails) {
      return <Spinner animation="border" variant="dark" />;
    }
    const { beerDetails } = this.state;
    return (
      <div>
        <div style={{ border: '1px solid gray' }}>
          <img
            src={beerDetails.image_url}
            style={{ height: '80px' }}
            alt="beer"
          ></img>
          <h3>{beerDetails.name}</h3>
          <h4>{beerDetails.tagline}</h4>
          <p>First brewed:{beerDetails.first_brewed}</p>
          <p>Attenuation level: {beerDetails.attenuation_level}</p>
          <h5> {beerDetails.description}</h5>
          <p>Created by: {beerDetails.contributed_by}</p>
        </div>
      </div>
    );
  }
}
