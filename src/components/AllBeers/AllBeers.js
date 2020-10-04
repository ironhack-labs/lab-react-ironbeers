import React from 'react';
import NavBar from '../Navbar/NavBar';
import './AllBeers.css';
import { Link } from 'react-router-dom';

export default function AllBeers(props) {
  return (
    <div className="beers-container">
      <NavBar />
      {props.beersList.map((beer) => (
        <div key={beer._id}>
          <Link to={`/beers/${beer._id}`} className="beer-card">
            <div className="image-container">
              <img src={beer.image_url} alt={beer.name} />
            </div>
            <div className="beer-details">
              <h4>{beer.name}</h4>
              <h5>{beer.tagline}</h5>
              <p>
                <span>Created by: </span>
                {beer.contributed_by}
              </p>
            </div>
          </Link>
          <hr />
        </div>
      ))}
    </div>
  );
}
