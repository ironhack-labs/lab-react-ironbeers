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
            <h2>All Beers</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              lacinia eleifend ornare. Etiam eget dui egestas, sodales magna id,
              eleifend nisi. Proin sit amet tortor.
            </p>
          </Link>
        </div>
        <div className="random-beer">
          <img src="/images/random-beer.png" alt="beer" />
          <h2>Random beer</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            lacinia eleifend ornare. Etiam eget dui egestas, sodales magna id,
            eleifend nisi. Proin sit amet tortor.
          </p>
        </div>
        <div className="new-beer">
          <Link to="./AddBeer">
            <img src="/images/new-beer.png" alt="beer" />
            <h2>New Beer</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              lacinia eleifend ornare. Etiam eget dui egestas, sodales magna id,
              eleifend nisi. Proin sit amet tortor.
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default home;