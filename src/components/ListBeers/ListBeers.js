import NavBar from '../NavBar/NavBar';

import './ListBeers.css';

import React, { Component } from 'react';

import axios from 'axios';

import { Link } from 'react-router-dom';

export default class ListBeers extends Component {
  state = {
    data: null,
    isLoading: true,
  };

  componentDidMount() {
    axios
      .get('https://ih-beers-api2.herokuapp.com/beers')
      .then((res) => {
        this.setState({
          data: res.data,
          isLoading: false,
        });
      })
      .catch((err) => console.log(err));
  }

  render() {
    if (this.state.isLoading) return <h1>Loading...</h1>;
    return (
      <div className="list-beers">
        <NavBar />
        {this.state.data.map((beer) => (
          <Link to={`/beers/${beer._id}`} className="card" key={beer._id}>
            <div className="row my-4 mx-2">
              <div className="col">
                <img src={beer.image_url} alt="beer" height="200" />
              </div>
              <div className="col d-flex flex-column align-items-start justify-content-center">
                <h3>{beer.name}</h3>
                <h5 className="text-secondary">{beer.tagline}</h5>
                <p>
                  <b>Created by: </b>
                  {beer.contributed_by}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    );
  }
}
