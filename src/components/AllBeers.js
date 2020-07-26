import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import Header from './Header';

export class AllBeers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      beers: [],
    };
  }

  componentDidMount() {
    axios
      .get('https://ih-beers-api2.herokuapp.com/beers')
      .then((response) => {
        this.setState({ beers: response.data });
      })
      .catch((err) => console.log('Error trying to get the beer list', err));
  }

  render() {
    const beerList = this.state.beers.map((beer) => (
      <Link key={beer._id} className="link" to={'/beers/' + beer._id}>
        <div className="container">
          <div className="beerImage">
            <img src={beer.image_url} alt={beer.name} />
          </div>
          <div className="beerData">
            <h4>{beer.name}</h4>
            <h6>{beer.tagline}</h6>
            <p>
              <b>Created by:</b>
              {beer.contributed_by}
            </p>
          </div>
        </div>
      </Link>
    ));

    return (
      <div>
        <Header /> {beerList}
      </div>
    );
  }
}

export default AllBeers;
