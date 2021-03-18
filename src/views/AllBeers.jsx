import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { allBeers } from './../api/beersApi';
import { NavBar } from './../components/NavBar';

export class AllBeers extends Component {
  state = {
    beersList: [],
  };

  componentDidMount() {
    this.loadAllBeers();
  }

  async loadAllBeers() {
    const beersList = await allBeers();
    console.log('successful load');
    this.setState({
      beersList: beersList,
    });
  }
  render() {
    return (
      <div>
        <header>
          <NavBar />
        </header>
        <div>
          {this.state.beersList &&
            this.state.beersList.map((beer) => (
              <Link key={beer._id} to={`/beers/${beer._id}`}>
                <div>
                  <img src={beer.image_url} alt={beer.name} />
                  <h1>{beer.name}</h1>
                  <span>{beer.tagline}</span>
                  <br />
                  <small>{beer.contributed_by}</small>
                  <hr />
                </div>
              </Link>
            ))}
        </div>
      </div>
    );
  }
}

export default AllBeers;
