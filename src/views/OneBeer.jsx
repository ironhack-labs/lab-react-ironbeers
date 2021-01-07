import React, { Component } from 'react';
import axios from 'axios';
import HomeButtonHeader from '../components/HomeButtonHeader';

export class OneBeer extends Component {
  state = {
    beer: null,
  };

  componentDidMount() {
    axios
      .get(
        'https://ih-beers-api2.herokuapp.com/beers/' +
          this.props.match.params.id
      )
      .then((apiResponse) => {
        setTimeout(() => {
          this.setState({ beer: apiResponse.data });
        }, 1000);
      });
  }

  render() {
    if (!this.state.beer) {
      return <div>Loading the beer</div>;
    }

    return (
      <div>
        <HomeButtonHeader />
        <div
          style={{
            border: '1px solid lightgray',
            margin: '10px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <img
            style={{ width: '100px', margin: '10px' }}
            src={this.state.beer.image_url}
            alt={this.state.beer.name}
          />
          <div>
            <h2>{this.state.beer.name}</h2>
            <p>{this.state.beer.tagline}</p>
            <p>{this.state.beer.first_brewed}</p>
            <p>{this.state.beer.attenuation_level}</p>
            <p>{this.state.beer.description}</p>
            <p>{this.state.beer.contributed_by}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default OneBeer;
