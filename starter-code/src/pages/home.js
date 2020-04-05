import React from 'react';
import "./home.css"
import { Link } from 'react-router-dom';

const home = () => {
  return (
    <div>
      <div className="home">
        <div className="all-beers">
          <Link to="./beers">
            <img src="/images/beers.png" alt="beer" />
            <h3>All Beers</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              lacinia eleifend ornare. Etiam eget dui egestas, sodales magna id,
              eleifend nisi. Proin sit amet tortor.
            </p>
          </Link>
        </div>
        <img src="/images/random-beer.png" alt="beer" />
        <h3>Random beer</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacinia
          eleifend ornare. Etiam eget dui egestas, sodales magna id, eleifend
          nisi. Proin sit amet tortor.
        </p>
        <img src="/images/new-beer.png" alt="beer" />
        <h3>New Beer</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacinia
          eleifend ornare. Etiam eget dui egestas, sodales magna id, eleifend
          nisi. Proin sit amet tortor.
        </p>
      </div>
    </div>
  );
}

export default home;