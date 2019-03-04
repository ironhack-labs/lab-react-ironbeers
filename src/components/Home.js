import React, { Component } from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="container">
      <div className="card fixed-card">
        <div className="card-image">
          <figure className="image is-5by3">
            <img src='/images/beers.jpg' alt="beers"/>
          </figure>
        </div>
        <div className="card-content">
          <div className="media">
            <div className="media-content">
              <p className="title has-text-centered is-4">All Beers</p>
            </div>
          </div>
          <div className="content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Phasellus nec iaculis mauris.
              </div>
        </div>
      </div>
      <div className="card fixed-card">
        <div className="card-image">
          <figure className="image is-5by3">
            <img src='/images/random-beer.jpg' alt="random-beer"/>
          </figure>
        </div>
        <div className="card-content">
          <div className="media">
            <div className="media-content">
              <p className="title has-text-centered is-4">Random Beer</p>
            </div>
          </div>
          <div className="content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Phasellus nec iaculis mauris.
              </div>
        </div>
      </div>
      <div className="card fixed-card">
        <div className="card-image">
          <figure className="image is-5by3">
            <img src='/images/new-beer.jpg' alt="beers"/>
          </figure>
        </div>
        <div className="card-content">
          <div className="media">
            <div className="media-content">
              <p className="title has-text-centered is-4">New Beer</p>
            </div>
          </div>
          <div className="content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Phasellus nec iaculis mauris.
              </div>
        </div>
      </div>
    </div>
  )
}

export default Home;