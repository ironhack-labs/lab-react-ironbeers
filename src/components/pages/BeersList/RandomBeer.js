import React, { Component } from 'react';
import BeersService from '../../../services/beers.service';

class RandomBeer extends Component {
  constructor() {
    super();

    this.state = {
      beer: null,
    };

    this.BeersService = new BeersService();
  }

  componentDidMount() {
    this.BeersService.getRandomBeer()
      .then((res) => {
        this.setState({
          ...this.state,
          beer: res.data,
        });
      })
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <div>
        {this.state.beer ? (
          <div>
            <div>
              <img src={this.state.beer.image_url} alt="beer bottle" />
            </div>
            <div>
              <h2>{this.state.beer.name}</h2>
              <h3>{this.state.beer.tagline}</h3>
              <h4>First Brewed: {this.state.beer.first_brewed}</h4>
              <h5>Attenuation Level: {this.state.beer.attenuation_level}</h5>
              <p>{this.state.beer.description}</p>
              <br />
              <span>Contributed by: {this.state.beer.contributed_by}</span>
            </div>
          </div>
        ) : (
          <h3>Loading...</h3>
        )}
      </div>
    );
  }
}

export default RandomBeer;
