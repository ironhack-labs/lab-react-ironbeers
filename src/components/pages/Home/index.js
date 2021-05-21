import React from 'react';
import { Link } from 'react-router-dom';

import beersImage from '../../../assets/beers.png';
import randomBeerImage from '../../../assets/random-beer.png';
import newBeerImage from '../../../assets/new-beer.png';

import './styles.css';

const Home = () => {
  return (
    <div>
      <section className="section-container">
        <img src={beersImage} alt="Beers" />
        <Link to="/beers">All Beers</Link>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          pharetra egestas lectus, sit amet eleifend ex ticidunt in. Nam dictum
          arcu ut dignissim yarius.
        </p>
      </section>
      <section className="section-container">
        <img src={randomBeerImage} alt="One beer" />
        <Link to="/random-beer">Random Beer</Link>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          pharetra egestas lectus, sit amet eleifend ex ticidunt in. Nam dictum
          arcu ut dignissim yarius.
        </p>
      </section>
      <section className="section-container">
        <img src={newBeerImage} alt="One beer" />
        <Link to="/new-beer">New Beer</Link>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          pharetra egestas lectus, sit amet eleifend ex ticidunt in. Nam dictum
          arcu ut dignissim yarius.
        </p>
      </section>
    </div>
  );
};

export default Home;
