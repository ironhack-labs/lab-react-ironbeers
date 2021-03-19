import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class BeerList extends Component {
  state = {
    beers: null,
  };

  componentDidMount() {
    axios
      .get('https://ih-beers-api2.herokuapp.com/beers')
      .then((response) => {
        // console.log(response);
        // With axios, your response data will always be at
        // response.data

        this.setState({ beers: response.data });

        // console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    if (this.state.beers === null) {
      return <div>Loading....</div>;
    }
    return (
      <div>
        <h1>ALL THE BEERS </h1>
        {this.state.beers.map((beer) => {
          return (
            <div key={beer._id}>
              <img src={beer.image_url} alt="" />
              <h2>{beer.name} </h2>
              <h3>{beer.tagline}</h3>
              <p>{beer.contributed_by}</p>
              <Link to={`/beers/${beer._id}`}>See more !</Link>
            </div>
          );
        })}
      </div>
    );
  }
}

export default BeerList;
