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
      <div className=" container d-flex flex-column align-items-center">
        <img src={this.state.image_url} width="200px" height="auto" />
        <div className="container d-flex justify-content-center">
          <h1>{this.state.name}</h1>
          <span>{this.state.attenuation_level}</span>
        </div>
        <div className="container d-flex justify-content-center">
          <span className="mr-4">{this.state.tagline}</span>
          <span>
            <small>
              <strong>{this.state.first_brewed}</strong>
            </small>
          </span>
        </div>
        <div className="text-center text-wrap" style={{ width: '200px' }}>
          {this.state.description}
        </div>
        <div>
          <small>{this.state.contributed_by}</small>
        </div>
      </div>
    );
  }
}

export default BeerPage;
