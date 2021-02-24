import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Searchbar from '../components/Searchbar';
import { getAllBeersService, queryBeerService } from './../beer.service';

class Beers extends Component {
  state = {
    beers: [],
    query: '',
  };

  componentDidMount() {
    getAllBeersService()
      .then(({ data }) => this.setState({ beers: data }))
      .catch((err) => console.log(err));
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.query !== this.state.query) {
      queryBeerService(this.state.query)
        .then(({ data }) => this.setState({ beers: data }))
        .catch((err) => console.log(err));
    }
  }

  searchBeer = (searchValue) => {
    this.setState({ query: searchValue });
  };

  render() {
    const { beers } = this.state;
    console.log('beers list', beers);
    return (
      <main>
        <Navbar />
        <h2>Beers</h2>
        <Searchbar searchBeer={this.searchBeer} />
        <div>
          {beers &&
            beers.map((beer) => (
              <div key={beer._id}>
                <h5>{beer.name}</h5>
                <p>{beer.description}</p>
                <Link to={`/beers/${beer._id}`}>Details</Link>
              </div>
            ))}
        </div>
      </main>
    );
  }
}

export default Beers;
