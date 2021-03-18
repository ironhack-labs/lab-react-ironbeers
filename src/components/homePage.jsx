import React from 'react';
import { Link } from 'react-router-dom';
import BeerRandI from '../assets/random-beer.png';
import Beer from '../assets/beers.png';
import NewBeer from '../assets/new-beer.png';

const HomePage = () => {
  return (
    <div className="mt-100 center-block">
      <div className="card mt-5" style={{ width: 450 }}>
        <img src={ Beer } className="card-img-top" alt="..." />
        <div className="card-body">
          <Link to={'/beers'}>
            <h5 className="card-title">All Beers</h5>
          </Link>
          <p className="card-text">
            Beer is one of the oldest and most widely consumed alcoholic
            drinks in the world, and the third most popular drink overall after
            water and tea.
          </p>
        </div>
      </div>

      <div className="card mt-5" style={{ width: 450 }}>
        <img src={BeerRandI} className="card-img-top" alt="..." />
        <div className="card-body">
          <Link to={'/randomBeer'}>
            <h5 className="card-title">Random Beer</h5>
          </Link>
          <p className="card-text">
            Beer is measured and assessed by bitterness, by strength and by
            colour.
          </p>
        </div>
      </div>

      <div className="card mt-5" style={{ width: 450 }}>
        <img src={ NewBeer } className="card-img-top" alt="..." />
        <div className="card-body">
          <Link to={'/newBeer'}>
            <h5 className="card-title">New Beer</h5>
          </Link>
          <p className="card-text">
            Around the world, there are many traditional and ancient
            starch-based drinks classed as beer. In Africa, there are various
            ethnic beers made from sorghum or millet, such as Oshikundu in
            Namibia and Tella in Ethiopia.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
