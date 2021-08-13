import React, { Component } from 'react';
import Navbar from './Navbar';
import axios from 'axios';

class RandomBeer extends Component {
  state = {
    beer: null,
  };

  componentDidMount() {
    axios
      .get('https://ih-beers-api2.herokuapp.com/beers/random')
      .then((res) => {
        console.log(res.data);
        this.setState({
          beer: res.data,
        });
      })
      .catch((err) => console.log(err));
  }

  render() {
    if (this.state.beer === null) {
      return <div>Loading...</div>;
    }
    return (
      <div>
        <Navbar />

        <div>
          <div key={this.state.beer._id}>
            <img
              src={this.state.beer.image_url}
              alt=""
              style={{ width: '30px' }}
            />
            <div>
              <h2>{this.state.beer.name}</h2>
              <h3>{this.state.beer.tagline}</h3>
              <p>{this.state.beer.first_brewed}</p>
              <p>{this.state.beer.attenuation_level}</p>
              <p>{this.state.beer.description}</p>
              <p>{this.state.beer.contributed_by}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default RandomBeer;
