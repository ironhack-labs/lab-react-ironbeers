import React from 'react';
import { Link } from 'react-router-dom';
import BeersImg from '../../assets/beers.png';
import NewBeerImg from '../../assets/new-beer.png';
import RandomBeerImg from '../../assets/random-beer.png';

export default class Home extends React.Component {
  render() {
    return (
      <div className="Home">
        <Link className="Home__img" to="/beers">
          <img src={BeersImg} alt="beers" />
          <h2>All Beers</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </Link>
        <Link className="Home__img" to="/beers">
          <img src={RandomBeerImg} alt="beers" />
          <h2>Random Beer</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </Link>
        <Link className="Home__img" to="/beers">
          <img src={NewBeerImg} alt="beers" />
          <h2>New Beer</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </Link>
      </div>
    );
  }
}
