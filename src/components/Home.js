import React from 'react';
import { Link } from 'react-router-dom';
//import { Link } from 'react-router-dom';
import beers from '../assets/beers.png';
import random from '../assets/random-beer.png';
import newBeer from '../assets/new-beer.png';

const Home = () => {

  return (
    <div className="container-home">
      <Link to="/beers">
        <div className="beers-wrapper">
          <img src={beers} alt="allbeers" />
          <h1>All Beers</h1>
          <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.</p>
        </div>
      </Link>
      <Link to="/random-beer">
        <div className="beers-wrapper">
          <img src={random} alt="randombeer" />
          <h1>Random Beer</h1>
          <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.</p>
        </div>
      </Link>
      <Link to="/new-beer">
        <div className="beers-wrapper">
          <img src={newBeer} alt="randombeer" />
          <h1>Random Beer</h1>
          <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.</p>
        </div>
      </Link>
    </div>
  )
}

export default Home;
