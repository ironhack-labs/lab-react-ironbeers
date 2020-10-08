import React, { Component } from 'react';
import Header from '../components/Header';
import beerAPI from '../api/apiHandler';
import { Link } from 'react-router-dom';

export default class Beers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      beers: [],
      selectedBeers: null,
    };
  }

  async componentDidMount() {
    try {
      const apiResponse = await beerAPI.getBeers();
      this.setState({ beers: apiResponse.data });
    } catch (error) {
      this.setState({ error: 'Il y a eu une erreur' });
    }
  }

  handleClick = (index) => {
    this.setState({ selectedBeers: index });
  };

  render() {
    return (
      <div>
        <Header />
        <h1>All Beers</h1>
        {this.state.beers.map((beer) => {
          return (
            <Link key={beer.name} to={`/beers/${beer._id}`}>
              <div>
                <img
                  className="photo-beer"
                  src={beer.image_url}
                  alt={beer.name}
                />
                <p>{beer.name}</p>
                <p>{beer.tagline}</p>
                <p>{beer.contributed_by}</p>
              </div>
            </Link>
          );
        })}
      </div>
    );
  }
}
