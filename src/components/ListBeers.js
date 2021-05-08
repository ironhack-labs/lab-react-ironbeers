import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

import NavBar from './NavBar';

class ListBeers extends React.Component {
  render() {
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
        <div>{allBeers}</div>
      </div>
    );
  }
}
export default ListBeers;
