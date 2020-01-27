import React from 'react';
import NavBar from '../NavBar/Navbar';
import { Link } from 'react-router-dom';
import BeerLine from '../BeerLine/BeerLine';

import './BeersList.css';

export default function BeersList(props) {
  const { beersList } = props;

  return (
    <div className="beers-list">
      <NavBar />
      {beersList.map((beer, i) => {
        return (
          <Link
            to={`/beers/${beer._id}`}
          >
            <BeerLine key={i} beer={beer} />
          </Link>
        );
      })}
    </div>
  );
}
