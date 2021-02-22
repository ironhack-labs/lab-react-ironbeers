import React from 'react';
import beersImg from '../assets/beers.png';
import randomBeerImg from '../assets/random-beer.png';
import newBeerImg from '../assets/new-beer.png';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="container">
      <div className="card">
        <Link to="/beers">
          <img src={beersImg} alt="all-beers"></img>
        </Link>
        <div className="text">
          <Link to="/beers" className="title-link">
            All Beers
          </Link>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            gravida orci at diam semper maximus. Nunc ac pharetra libero. Nullam
            sed elit iaculis, tempus odio nec, accumsan massa. Fusce facilisis,
            risus malesuada condimentum consequat, magna nulla faucibus lorem,
            et vestibulum erat dolor et turpis.
          </p>
        </div>
      </div>
      <div className="card">
        <Link to="/random-beer">
          <img src={randomBeerImg} alt="all-beers"></img>
        </Link>
        <div className="text">
          <Link to="/random-beer" className="title-link">
            Random Beer
          </Link>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            gravida orci at diam semper maximus. Nunc ac pharetra libero. Nullam
            sed elit iaculis, tempus odio nec, accumsan massa. Fusce facilisis,
            risus malesuada condimentum consequat, magna nulla faucibus lorem,
            et vestibulum erat dolor et turpis.
          </p>
        </div>
      </div>
      <div className="card">
        <Link to="/new-beer">
          <img src={newBeerImg} alt="all-beers"></img>
        </Link>
        <div className="text">
          <Link to="/new-beer" className="title-link">
            New Beer
          </Link>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            gravida orci at diam semper maximus. Nunc ac pharetra libero. Nullam
            sed elit iaculis, tempus odio nec, accumsan massa. Fusce facilisis,
            risus malesuada condimentum consequat, magna nulla faucibus lorem,
            et vestibulum erat dolor et turpis.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
