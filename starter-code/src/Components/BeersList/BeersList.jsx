import React from 'react';
import NavBar from '../NavBar/Navbar';
import { Link } from 'react-router-dom';
import BeerLine from '../BeerLine/BeerLine';

import './BeersList.css';

export default function BeersList(props) {
  console.log(props);
  const { beersList } = props;

  return (
    <div className="beers-list">
      <NavBar />
      {beersList.map((beer, i) => {
        return (
          <Link
            key={i}
            onClick={() => props.getSingleBeer(beer._id)}
            to={`/beers/${beer._id}`}
          >
            <BeerLine beer={beer} />
          </Link>
        );
      })}
    </div>
  );
}
