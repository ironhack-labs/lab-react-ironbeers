import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

//* api link: https://ih-beers-api2.herokuapp.com/beers

export default class AllBeers extends Component {
  state = {
    loading: true,
    beers: [],
  };

  componentDidMount() {
    axios.get('https://ih-beers-api2.herokuapp.com/beers').then((response) => {
      this.setState({
        beers: response.data,
        loading: false,
      });
    });
  }

  render() {
    return (
      <div>
        {this.state.loading && <h1>Loading!</h1>}
        {!this.state.loading && (
          <ul>
            {this.state.beers.map((beer) => {
              return (
                <li>
                  <Link to={`/beers/${beer._id}`}>{beer.name}</Link>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    );
  }
}
