import React from 'react';
import { Link } from 'react-router-dom';
import img1 from '../../assets/beers.png';
import img2 from '../../assets/new-beer.png';
import img3 from '../../assets/random-beer.png';

const Home = () => {
  return (
    <div className="col" style={{ maxHeight: '90vh' }}>
      <div className="list-group">
        <img src={img1} alt="All beers" />
        <Link className="list-group-item list-group-item-action" to="/beers">
          <p className="fw-bold">All Beers</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </Link>
        <img src={img2} alt="Random Beer" />
        <Link
          className="list-group-item list-group-item-action"
          to="/random-beer"
        >
          <p className="fw-bold">Random Beer</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </Link>
        <img src={img3} alt="New Beer" />
        <Link className="list-group-item list-group-item-action" to="/new-beer">
          <p className="fw-bold">New Beer</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Home;
