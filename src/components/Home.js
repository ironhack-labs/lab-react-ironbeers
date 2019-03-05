import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="container">
      <div className="card fixed-home-card">
        <Link to="/beers">
          <div className="card-image">
            <figure className="image is-5by3">
              <img src='/images/beers.jpg' alt="beers" />
            </figure>
          </div>
          <div className="card-content">
            <div className="media">
              <div className="media-content">
                <p className="title has-text-centered is-3">All Beers</p>
              </div>
            </div>
            <div className="content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Phasellus nec iaculis mauris.
          </div>
          </div>
        </Link>
      </div>
      <div className="card fixed-home-card">
        <Link to="/random-beer">
          <div className="card-image">
            <figure className="image is-5by3">
              <img src='/images/random-beer.jpg' alt="random-beer" />
            </figure>
          </div>
          <div className="card-content">
            <div className="media">
              <div className="media-content">
                <p className="title has-text-centered is-3">Random Beer</p>
              </div>
            </div>
            <div className="content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Phasellus nec iaculis mauris.
              </div>
          </div>
        </Link>
      </div>
      <div className="card fixed-home-card">
        <Link to="/new-beer">
          <div className="card-image">
            <figure className="image is-5by3">
              <img src='/images/new-beer.jpg' alt="beers" />
            </figure>
          </div>
          <div className="card-content">
            <div className="media">
              <div className="media-content">
                <p className="title has-text-centered is-3">New Beer</p>
              </div>
            </div>
            <div className="content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Phasellus nec iaculis mauris.
              </div>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Home;