import React from 'react';
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <section className="home-page">
        <div className="beers-img">
          <img src="/images/beers.png" alt="craft station" />
        </div>
        <div className="beers-text">
          <Link activeStyle={{ color: 'red' }} to="/beers">
            All Beers
          </Link>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
      </section>
      <section className="home-page">
        <div className="beers-img">
          <img src="/images/random-beer.png" alt="craft tap close-up" />
        </div>
        <div className="beers-text">
          <Link activeStyle={{ color: 'red' }} to="/random-beer">
            Random Beer
          </Link>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
      </section>
      <section className="home-page">
        <div className="beers-img">
          <img src="/images/new-beer.png" alt="beer bottle and glass" />
        </div>
        <div className="beers-text">
          <Link activeStyle={{ color: 'red' }} to="/new-beer">
            New Beer
          </Link>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
      </section>
    </>
  );
}

export default Home;
