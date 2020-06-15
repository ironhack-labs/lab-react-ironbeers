import React from 'react';
import Navbar from './Navbar';
import { NavLink } from 'react-router-dom';

function AllBeers(props) {
  const beers = props.beers;
  return (
    <div>
      <Navbar />
      <img src={process.env.PUBLIC_URL + '/images/beers.png'} className="allbeers-image" alt="beers" />
      {beers.map((beer, id) => {
        return (
          <div className="container">
            <div class="row">
              <div className="image-container">
                <img
                  src={`${beer.image_url}`}
                  alt="beer"
                  className="beer-img"
                />
              </div>
              <div className="beer-info" key={id}>
              <NavLink to="/beers/:id">{beer.name}</NavLink><br />
                  {beer.tagline}<br />
                  {beer.contributed_by}
              </div>
            </div>
          </div>
          //
        );
      })}
    </div>
  );
}

export default AllBeers;
