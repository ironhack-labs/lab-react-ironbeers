import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class AllBeers extends Component {
  state = {
    beers: [],
  };

  componentDidMount() {
    axios
      .get('https://ih-beers-api2.herokuapp.com/beers')
      .then((allBeers) => {
        this.setState({ beers: allBeers.data });
        console.log('al beers:', allBeers);
      })
      .catch((err) => console.log(err));
  }

  render() {
    console.log('This is state.beers in render', this.state.beers);

    return (
      <div>
        <h1>This are all my Beers</h1>
        {this.state.beers.map((beer) => {
          return (
            <div key={beer._id}>
              <img src={beer.image_url} alt="beer" />
              <Link to={`/beers/${beer._id}`}>
                <h1>{beer.name}</h1>
              </Link>
              <h2>{beer.tagline}</h2>
              <p>Created by: {beer.contributed_by}</p>
              <hr />
            </div>
          );
        })}
      </div>
    );
  }
}
