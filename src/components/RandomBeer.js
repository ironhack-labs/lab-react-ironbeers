import React, { Component } from 'react';
import axios from 'axios';
import { Spinner } from 'react-bootstrap';

class RandomBeer extends Component {
  state = {
    beerRandom: null,
  };

  async componentDidMount() {
    try {
      await axios
        .get(`https://ih-beers-api2.herokuapp.com/beers/random`)
        .then((res) => {
          this.setState({
            beerRandom: res.data,
          });
        });
    } catch (err) {
      console.log('Random beer fetch failed', err);
    }
  }

  render() {
    if (!this.state.beerRandom) {
      return <Spinner animation="border" variant="dark" />;
    }
    const { beerRandom } = this.state;
    return (
      <div>
        <div style={{ border: '1px solid gray' }}>
          <img
            src={beerRandom.image_url}
            style={{ height: '80px' }}
            alt="random beer"
          ></img>
          <h3>{beerRandom.name}</h3>
          <h4>{beerRandom.tagline}</h4>
          <p>First brewed:{beerRandom.first_brewed}</p>
          <p>Attenuation level: {beerRandom.attenuation_level}</p>
          <h5> {beerRandom.description}</h5>
          <p>Created by: {beerRandom.contributed_by}</p>
        </div>
      </div>
    );
  }
}

export default RandomBeer;

//this.props.beers[Math.floor(Math.random() * beers.length)]
