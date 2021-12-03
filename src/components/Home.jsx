import React from 'react';
import { Link } from 'react-router-dom';
import beers from '../assets/beers.png';
import beers1 from '../assets/random-beer.png';
import beers2 from '../assets/new-beer.png';

export const Home = () => {
  return (
    <div className="container">
      <img className="home-beers-img" src={beers} alt="beers" />
      <Link to={'/beers'}>
        <h3 className="link">All Beers</h3>
      </Link>
      <p>
        laoreet non curabitur gravida arcu ac tortor dignissim convallis aenean
        et tortor at risus viverra adipiscing at in tellus integer
      </p>

      <img className="home-beers-img" src={beers1} alt="beers" />
      <Link to={'/random-beer'}>
        <h3 className="link">Random Beer</h3>
      </Link>
      <p>
        laoreet non curabitur gravida arcu ac tortor dignissim convallis aenean
        et tortor at risus viverra adipiscing at in tellus integer
      </p>

      <img className="home-beers-img" src={beers2} alt="beers" />
      <Link to={'/new-beer'}>
        <h3 className="link">New Beer</h3>
      </Link>
      <p>
        laoreet non curabitur gravida arcu ac tortor dignissim convallis aenean
        et tortor at risus viverra adipiscing at in tellus integer
      </p>
    </div>
  );
};
