import React from 'react';
import '../style/Home.css';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="Home">
      <div className="beers">
        <div className="imgBeer img1"></div>
        <h1>
          <Link to="/beers">All Beers</Link>
        </h1>
        <p></p>
      </div>
      <div className="beers">
        <div className="imgBeer img2"></div>
        <h1>
          <Link to="/random-beer">Random Beer</Link>
        </h1>
        <p></p>
      </div>
      <div className="beers">
        <div className="imgBeer img3"></div>
        <h1>
          <Link to="new-beer">New Beer</Link>
        </h1>
        <p></p>
      </div>
    </div>
  );
}

export default Home;
