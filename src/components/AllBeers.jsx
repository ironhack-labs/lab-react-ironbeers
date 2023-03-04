import React from 'react';
import { Link } from 'react-router-dom';
import logoHome from '../assets/home-icon.png';
import '../index.css';

function AllBeers({ beers }) {
  return (
    <div>
      <nav className="nav-bar">
        <Link to="/">
          <img src={logoHome} alt="logo home" />
        </Link>
      </nav>
      {beers.map((beer) => {
        return (
          <>
            <div className="all-beers">
              <div>
                <img src={beer.image_url} alt="beerImage" />
              </div>
              <div className="information-beer">
                <Link className='beer-link' to={`/beers/${beer._id}`}>
                  <h2>{beer.name}</h2>
                </Link>
                <h3>{beer.tagline}</h3>
                <p> <b>Created by:</b> {beer.contributed_by}</p>
              </div>
            </div>
            <hr />
          </>
        );
      })}
    </div>
  );
}

export default AllBeers;
