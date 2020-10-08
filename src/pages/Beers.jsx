import React from 'react';
import Header from '../components/Header';
import beerApi from '../api/beerApi';
import { Link } from 'react-router-dom';
import Search from '../components/Search';

class Beers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      beers: [],
      selectedBeer: null,
    };
  }

  async componentDidMount() {
    beerApi
      .getBeers()
      .then((apiResponse) => {
        this.setState({ beers: apiResponse.data });
      })
      .catch((apiError) => {
        console.log(apiError);
      });
  }

  searchBeer = (query) => {
    beerApi
      .search(query.search)
      .then((apiResponse) => {
        this.setState({ beers: apiResponse.data });
      })
      .catch((apiError) => {
        console.log(apiError);
      });
  };

  render() {
    return (
      <div>
        <h1>All the beers</h1>

        <Search handleSearch={this.searchBeer} />
        {this.state.beers.map((beer) => (
          <div key={beer._id}>
            <img src={beer.image_url} alt="{beer.name}" />
            <Link to={`/beers/${beer._id}`}>
              <div>{beer.name}</div>
            </Link>
            <p>{beer.tagline}</p>
            <p>
              <b>Created by:</b> {beer.contributed_by.split('<')[0]}
            </p>
          </div>
        ))}
      </div>
    );
  }
}

export default Beers;
