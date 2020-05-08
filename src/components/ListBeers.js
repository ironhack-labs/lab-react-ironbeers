import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class ListBeers extends Component {
  state = {
    beers: [],
  };

  componentDidMount() {
    axios.get('https://ih-beers-api2.herokuapp.com/beers').then((response) => {
      this.setState({
        beers: response.data,
      });
    });
  }
  render() {
    return (
      <div>
        <h1>List of Beers</h1>
        {this.state.beers.map((beer) => {
          return (
            <div key={beer._id}>
              <img src={beer.image_url} alt="beer" />
              <Link to={`/beer/${beer._id}`}>
                <h2>{beer.name}</h2>
              </Link>
              <h3>{beer.tagline}</h3>
              <p>Created by: {beer.contributed_by}</p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default ListBeers;
