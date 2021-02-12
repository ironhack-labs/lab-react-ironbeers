import React from 'react';
import Nav from './Nav';
import axios from 'axios';

class RandomBeer extends React.Component {
  state = {
    image_url: '',
    name: '',
    tagline: '',
    first_brewed: '',
    attenuation_level: '',
    description: '',
    contributed_by: '',
  };

  async componentDidMount() {
    try {
      const response = await axios.get(
        `https://ih-beers-api2.herokuapp.com/beers/random`
      );
      this.setState({ ...response.data });
      console.log(this.state);
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    return (
      <div>
        <Nav />
        <img
          src={this.state.image_url}
          alt="beer photo"
          style={{ height: '250px' }}
          className=""
        />

        <h1>{this.state.name} </h1>
        <span>{this.state.tagline}</span>
        <span>{this.state.first_brewed}</span>
        <span>{this.state.attenuation_level}</span>
        <span>{this.state.description}</span>
        <span>{this.state.contributed_by}</span>
      </div>
    );
  }
}

export default RandomBeer;
