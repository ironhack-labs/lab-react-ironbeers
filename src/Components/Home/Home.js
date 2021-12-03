import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import beers from '../../assets/beers.png';
import Randombeer from '../../assets/random-beer.png';
import Newbeer from '../../assets/new-beer.png';

function Home() {
  return (
    <div className="HomeCard">
      <div className="Card">
        <Link to="/beers">
          <img src={beers}></img>
          <h2>All Beers</h2>
          <p>
            Many desktop publishing packages and web page editors now use Lorem
            Ipsum as their default model text, and a search for 'lorem ipsum'
            will uncover many web sites still in their infancy. Various versions
            have evolved over the years, sometimes by accident, sometimes on
            purpose (injected humour and the like).
          </p>
        </Link>
      </div>
      <div className="Card">
        <Link to="/random">
          <img src={Randombeer}></img>
          <h2>Random Beer</h2>
          <p>
            Many desktop publishing packages and web page editors now use Lorem
            Ipsum as their default model text, and a search for 'lorem ipsum'
            will uncover many web sites still in their infancy. Various versions
            have evolved over the years, sometimes by accident, sometimes on
            purpose (injected humour and the like).
          </p>
        </Link>
      </div>
      <div className="Card">
        <Link to="/new">
          <img src={Newbeer}></img>
          <h2>New Beer</h2>
          <p>
            Many desktop publishing packages and web page editors now use Lorem
            Ipsum as their default model text, and a search for 'lorem ipsum'
            will uncover many web sites still in their infancy. Various versions
            have evolved over the years, sometimes by accident, sometimes on
            purpose (injected humour and the like).
          </p>
        </Link>
      </div>
    </div>
  );
}

export default Home;
