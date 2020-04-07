import React from 'react';
import "./home.css"
import { Link } from 'react-router-dom';
import Nav from "../components/Nav";

const home = () => {
  return (
    <div>
      <div className="home-nav">
        <Nav />
      </div>
      <div className="home">
        <div className="home-all-beers">
          <Link style={{ textDecoration: 'none' }} to="./beers">
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
          <Link style={{ textDecoration: 'none' }} to="./RandomBeer</Link>">
          <img src="/images/random-beer.png" alt="beer" />
          <h2>Random Beer</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            lacinia eleifend ornare. Etiam eget dui egestas, sodales magna id,
            eleifend nisi. Proin sit amet tortor.
          </p>
          </Link>
        </div>
        <div className="new-beer">
          <Link style={{ textDecoration: 'none' }} to="./AddBeer">
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