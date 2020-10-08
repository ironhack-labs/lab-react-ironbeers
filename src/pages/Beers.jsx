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
        <Header />

        <Search handleSearch={this.searchBeer} />
        <div className="beer-list">
        {this.state.beers.map((beer) => (
          <div className="beer-in-beers" key={beer._id}>
            <img src={beer.image_url} className="beers-img" alt="{beer.name}" />
            <div className="beer-data">
              <Link className="link" to={`/beers/${beer._id}`}>
                <h3>{beer.name}</h3>
              </Link>
              <p className="tagline">{beer.tagline}</p>
              <p className="contributed">
                <b>Created by:</b> {beer.contributed_by}
              </p>
            </div>
          </div>
        ))}
        </div>
      </div>
    );
  }
}

export default Beers;
