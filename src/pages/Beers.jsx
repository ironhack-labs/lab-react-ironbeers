import React, { Component } from 'react';
import ironBeersApi from '../api/apiHandler';
import BeerCard from '../Components/BeerCard';
import '../beers.css';
import LoadingSpinner from '../Components/LoadingSpinner';

export default class Beers extends Component {
  state = {
    beers: [],
    message: <LoadingSpinner />
  };

  componentDidMount() {
    this.props.getCurrentPath(this.props.match.path);
    ironBeersApi
      .getAllBeers()
      .then((apiRes) => {
        this.setState({
          beers: apiRes.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  handleSearch = (evt) => {
    ironBeersApi.searchBeer(evt.target.value)
    .then( ({data: fetchedBeers}) => {
      this.setState({
        beers: fetchedBeers,
        message: !fetchedBeers.length && <p className="not-found-msg">No beers matches your search</p>
      })
    })
  }

  render() {
    const beers = this.state.beers;
    const beersDisplay = beers.map((beer) => (
      <BeerCard beer={beer} key={beer._id} />
    ));

    return (
      <div className="beers-grid">
        <h2 className="page-title">All Beers</h2>
        <div className="searchBar">
          <label htmlFor="search">
            <i className="fas fa-search fa-2x"></i>
          </label>
          <input id="search" name="search" type="text" placeholder="Search for a beer" onChange={this.handleSearch}/>
        </div>
        {beers.length ? beersDisplay : this.state.message}
      </div>
    );
  }
}
