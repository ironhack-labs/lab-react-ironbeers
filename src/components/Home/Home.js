import React from 'react';

import { Link } from 'react-router-dom';

import './Home.css';

import BeersImg from '../../assets/beers.png';

import NewBeerImg from '../../assets/new-beer.png';

import RandomBeerImg from '../../assets/random-beer.png';

export default function Home() {
  return (
    <div className="home">
      <Link to="/beers">
        <div className="card">
          <img
            src={BeersImg}
            alt="Image of some beers"
            className="card-img-top"
          />
          <div className="card-body">
            <h2 className="card-title">All Beers</h2>
            <p className="card-text text-secondary">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequatur sint sapiente suscipit similique nobis obcaecati
              ratione veniam illum ipsum voluptates.
            </p>
          </div>
        </div>
      </Link>

      <Link to="/random-beer">
        <div className="card">
          <img
            src={RandomBeerImg}
            alt="Image of some beers"
            className="card-img-top"
          />
          <div className="card-body">
            <h2 className="card-title">Random Beers</h2>
            <p className="card-text text-secondary">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequatur sint sapiente suscipit similique nobis obcaecati
              ratione veniam illum ipsum voluptates.
            </p>
          </div>
        </div>
      </Link>

      <Link to="/new-beer">
        <div className="card">
          <img
            src={NewBeerImg}
            alt="Image of some beers"
            className="card-img-top"
          />
          <div className="card-body">
            <h2 className="card-title">New Beer</h2>
            <p className="card-text text-secondary">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequatur sint sapiente suscipit similique nobis obcaecati
              ratione veniam illum ipsum voluptates.
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
}
