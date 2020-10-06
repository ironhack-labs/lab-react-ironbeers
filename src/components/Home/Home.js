import React from 'react';
import { Link } from 'react-router-dom';
// import './Home.css';

const Home = () => {
  return (
    <div>
      <Link style={{ textDecoration: 'none' }} to={'/beers'}>
        <div className="link-card">
          <img src="/images/beers.png" alt="beers" />
          <div className="link-text">
            <h2>All Beers</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias in
              earum magni quaerat iure odio quibusdam commodi impedit neque est,
              modi magnam, enim omnis fugit consequuntur dolore pariatur eaque.
              Nemo!
            </p>
          </div>
        </div>
      </Link>
      <Link style={{ textDecoration: 'none' }} to={'/random-beer'}>
        <div className="link-card">
          <img src="/images/random-beer.png" alt="random-beer" />
          <div className="link-text">
            <h2>Random Beer</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias in
              earum magni quaerat iure odio quibusdam commodi impedit neque est,
              modi magnam, enim omnis fugit consequuntur dolore pariatur eaque.
              Nemo!
            </p>
          </div>
        </div>
      </Link>
      <Link style={{ textDecoration: 'none' }} to={'/new-beer'}>
        <div className="link-card">
          <img src="/images/new-beer.png" alt="new-beer" />
          <div className="link-text">
            <h2>New Beer</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias in
              earum magni quaerat iure odio quibusdam commodi impedit neque est,
              modi magnam, enim omnis fugit consequuntur dolore pariatur eaque.
              Nemo!
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Home;
