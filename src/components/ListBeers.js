import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

import NavBar from './NavBar';
import axios from 'axios';

class ListBeers extends React.Component {
  state = {
    filteredBeers: [],
  };

  filterBeers(event) {
    const { value } = event.target;
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/search?q=${value}`)
      .then((result) => {
        this.setState({
          ...this.state.filteredBeers,
          filteredBeers: result.data,
        });
        console.log(this.state.filteredBeers);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    const filteredBeers = this.state.filteredBeers.map((beer, index) => {
      return (
        <div className="Beers-card" key={index}>
          <Link to={`/beers/${beer._id}`}>
            <img src={beer.image_url} alt={beer.name} className="Beers-img" />
            <h5>{beer.name}</h5>
            <p>{beer.tagline}</p>
            <p>{beer.contributed_by}</p>
          </Link>
        </div>
      );
    });
    const allBeers = this.props.beers.map((beer, index) => {
      return (
        <div className="Beers-card" key={index}>
          <Link to={`/beers/${beer._id}`}>
            <img src={beer.image_url} alt={beer.name} className="Beers-img" />
            <h5>{beer.name}</h5>
            <p>{beer.tagline}</p>
            <p>{beer.contributed_by}</p>
          </Link>
        </div>
      );
    });
    return (
      <div>
        <NavBar />
        <h1>ListBeers</h1>
        <input type="text" onChange={(event) => this.filterBeers(event)} />
        <div>
          {this.state.filteredBeers.length === 0 ? allBeers : filteredBeers}
        </div>
      </div>
    );
  }
}
export default ListBeers;
