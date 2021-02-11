import React, { Component } from 'react';
import axios from 'axios';

class BeerPage extends Component {
  state = {
    name: '',
    image_url: '',
    tagline: '',
    first_brewed: '',
    description: '',
    attenuation_level: '',
    contributed_by: '',
  };

  componentDidMount = async () => {
    try {
      const response = await axios.get(
        `https://ih-beers-api2.herokuapp.com/beers/${this.props.match.params.id}`
      );
      this.setState({ ...response.data });
    } catch (err) {
      console.error(err);
    }
  };

  render() {
    return (
      <div>
        <img src={this.state.image_url} width="auto" height="300px" />
        <div>
          <h1>{this.state.name}</h1>
          <span>{this.state.attenuation_level}</span>
        </div>
        <div>
          <span>{this.state.tagline}</span>
          <span>
            <strong>{this.state.first_brewed}</strong>
          </span>
        </div>
        <div>{this.state.description}</div>
        <div>{this.state.contributed_by}</div>
      </div>
    );
  }
}

export default BeerPage;
