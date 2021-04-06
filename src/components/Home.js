import React from 'react';
import { Link } from 'react-router-dom';

import beersImg from '../assets/beers.png';
import beersRandomImg from '../assets/random-beer.png';
import beersNewImg from '../assets/new-beer.png';

const Home = () => {
  return (
    <div className="Home d-flex flex-column align-items-stretch container mh-100">
      <div className="card text-decoration-none">
        <img src={beersImg} className="card-img-top h-auto" alt="beers" />
        <Link
          to="/beers"
          style={{ color: 'inherit', textDecoration: 'inherit' }}
        >
          <div className="card-body">
            <h1 className="card-title">All beers</h1>
            <p className="card-text">
              Commodo eu Lorem elit consequat aliquip proident. Aliqua eiusmod
              nulla consequat labore ipsum quis nulla nostrud voluptate irure
              aliquip velit commodo irure. Dolor Lorem velit non qui culpa qui
              labore labore eiusmod aliquip eiusmod. Tempor pariatur nulla ad
              incididunt duis fugiat Lorem eu anim eiusmod commodo magna amet.
              Esse laborum amet nisi tempor velit cillum sint.
            </p>
          </div>
        </Link>
      </div>
      <div className="card text-decoration-none">
        <img src={beersRandomImg} className="card-img-top h-auto" alt="beers" />
        <Link
          to="/random-beer"
          style={{ color: 'inherit', textDecoration: 'inherit' }}
        >
          <div className="card-body  ">
            <h1 className="card-title">Random Beer</h1>
            <p className="card-text">
              Commodo eu Lorem elit consequat aliquip proident. Aliqua eiusmod
              nulla consequat labore ipsum quis nulla nostrud voluptate irure
              aliquip velit commodo irure. Dolor Lorem velit non qui culpa qui
              labore labore eiusmod aliquip eiusmod. Tempor pariatur nulla ad
              incididunt duis fugiat Lorem eu anim eiusmod commodo magna amet.
              Esse laborum amet nisi tempor velit cillum sint.
            </p>
          </div>
        </Link>
      </div>
      <div className="card text-decoration-none">
        <img src={beersNewImg} className="card-img-top h-auto" alt="beers" />
        <Link
          to="/new-beer"
          style={{ color: 'inherit', textDecoration: 'inherit' }}
        >
          <div className="card-body  ">
            <h1 className="card-title">New Beer</h1>
            <p className="card-text">
              Commodo eu Lorem elit consequat aliquip proident. Aliqua eiusmod
              nulla consequat labore ipsum quis nulla nostrud voluptate irure
              aliquip velit commodo irure. Dolor Lorem velit non qui culpa qui
              labore labore eiusmod aliquip eiusmod. Tempor pariatur nulla ad
              incididunt duis fugiat Lorem eu anim eiusmod commodo magna amet.
              Esse laborum amet nisi tempor velit cillum sint.
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Home;
