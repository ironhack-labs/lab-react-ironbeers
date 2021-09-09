import React from 'react';
import { Link } from 'react-router-dom';
import BeersImg from '../../assets/beers.png';
import NewBeerImg from '../../assets/new-beer.png';
import RandomBeerImg from '../../assets/random-beer.png';
import './Home.css';

export default class Home extends React.Component {
  render() {
    return (
      <div className="Home">
        <Link className="Home__link" to="/beers">
          <img src={BeersImg} alt="beers" className="Home__link__image" />
          <div className="Home__link__info">
            <h2>All Beers</h2>
            <p className="text-muted">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </Link>
        <Link className="Home__link" to="/random-beer">
          <img src={RandomBeerImg} alt="beers" className="Home__link__image" />
          <div className="Home__link__info">
            <h2>Random Beer</h2>
            <p className="text-muted">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </Link>
        <Link className="Home__link" to="/new-beer">
          <img src={NewBeerImg} alt="beers" className="Home__link__image" />
          <div className="Home__link__info">
            <h2>New Beer</h2>
            <p className="text-muted">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </Link>
      </div>
    );
  }
}
