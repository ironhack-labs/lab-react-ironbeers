import React, { Component } from 'react';
import { api } from '../api-config';
import { Link } from 'react-router-dom';

import Header from './Header';

export class AllBeers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      beers: [],
      filtered: [],
      search: '',
    };
  }

  componentDidMount() {
    api
      .get('/beers')
      .then((response) => {
        this.setState((state) => ({
          ...state,
          beers: response.data,
          filtered: response.data,
        }));
      })
      .catch((err) => console.log('Error trying to get the beer list', err));
  }

  handleSearch = ({ target }) => {
    const filter = target.value.toLowerCase();
    const filteredBeers = this.state.beers.filter((beer) =>
      beer.name.toLowerCase().includes(filter)
    );
    this.setState((state) => ({
      ...state,
      filtered: filteredBeers,
      [target.name]: target.value,
    }));
  };

  render() {
    const beerList = this.state.filtered.map((beer) => (
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
        <Header />
        <div className="container mx-1">
          <input
            name="search"
            onChange={this.handleSearch}
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
        </div>

        {beerList}
      </div>
    );
  }
}

export default AllBeers;
