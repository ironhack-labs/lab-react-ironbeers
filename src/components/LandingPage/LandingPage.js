import React from 'react';

import './LandingPage.css';

import { Link } from 'react-router-dom';

import allBeers from '../../assets/beers.png';
import randomBeers from '../../assets/random-beer.png';
import newBeer from '../../assets/new-beer.png';

const LandingPage = () => {
  return (
    <div className="landing-page-container w-100 d-flex flex-column align-items-center">
      <Link to="/all-beers">
        <div className="btn beer-type-container container text-start mb-1">
          <img className="w-100" src={allBeers} alt="all beers" />
          <div className="beer-type-text-container mx-2">
            <h2 className="mb-0 fs-3">All Beers</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </p>
          </div>
        </div>
      </Link>
      <Link to="/beer/random">
        <div className="btn beer-type-container container text-start mb-1">
          <img className="w-100" src={randomBeers} alt="all beers" />
          <div className="beer-type-text-container mx-2">
            <h2 className="mb-0 fs-3">Random Beers</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </p>
          </div>
        </div>
      </Link>
      <Link to="/new-beer">
        <div className="btn beer-type-container container text-start mb-1">
          <img className="w-100" src={newBeer} alt="all beers" />
          <div className="beer-type-text-container mx-2">
            <h2 className="mb-0 fs-3">New Beers</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default LandingPage;
