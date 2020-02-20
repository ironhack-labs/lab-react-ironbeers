import React, { Component, Fragment } from 'react';
import axios from 'axios';

import Header from '../Header';
import { Link } from 'react-router-dom';

class Beers extends Component {
  constructor() {
    super();
    this.state = { listOfBeers: [] };
  }

  getAllBeers = () => {
    axios.get(`https://ih-beers-api2.herokuapp.com/beers`)
    .then(responseFromApi => {
      this.setState({
        listOfBeers: responseFromApi.data
      })
      console.log(responseFromApi.data)
    });
  }

  componentDidMount() {
    this.getAllBeers();
  }

  render() {
    const arrayOfBeersDivs = this.state.listOfBeers.map( beer => {
      return (
        <div >
          <Link to={`/beers/:beerId`} className="beer-container">
            <img src={beer.image_url} alt="beer-img" />
            <div className="beer-description">
              <h2>{beer.name}</h2>
              <h3>{beer.tagline}</h3>
              <p>Created by: {beer.contributed_by}</p>
            </div>
          </Link>
        </div>
      );
    })
    
    return (
      <div>
        <Header />
        {arrayOfBeersDivs}
      </div>
    )
  };
};

export default Beers;