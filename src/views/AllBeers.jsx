import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Header from '../components/Header';

export class AllBeers extends Component {
  state = {
    beers: [],
  };

  componentDidMount() {
    axios
      .get('https://ih-beers-api2.herokuapp.com/beers')
      .then((responseFromApi) => {
        console.log(responseFromApi);
        this.setState({
          beers: responseFromApi.data,
        });
      });
  }

  render() {
    return (
      <div>
        <Header />
        <h1>All beers</h1>
        {this.state.beers.map((beer) => {
          return (
            <div key={beer._id}>
              <img
                style={{
                  width: 100,
                }}
                src={beer.image_url}
                alt={beer.name}
              />

              <Link to={`/beers/${beer._id}`}>
                <h3>{beer.name}</h3>
              </Link>
              <p>{beer.tagline}</p>
              <p>{beer.contributed_by}</p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default AllBeers;
