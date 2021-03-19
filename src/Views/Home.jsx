import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import allBeers from "./../assets/beers.png";
import randomBeer from "./../assets/random-beer.png";
import newBeer from "./../assets/new-beer.png";

export class Home extends Component {
  render() {
    return (
      <div>
        <div className="homeContainer">
          <div className="allBeersContainer">
            <Link to="/beers">
              <img src={allBeers} alt="all-Beers" />
            </Link>
            <h2>All Beers</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores inventore facilis numquam soluta nesciunt, saepe itaque
              nam aliquam temporibus quo nostrum corrupti libero eveniet dolorum
              dolore, nemo quaerat accusantium nisi.
            </p>
          </div>
          <div className="randomBeer">
            <Link to="/random-beer">
              <img src={randomBeer} alt="random-Beer" />
            </Link>
            <h2>Random Beer</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores inventore facilis numquam soluta nesciunt, saepe itaque
              nam aliquam temporibus quo nostrum corrupti libero eveniet dolorum
              dolore, nemo quaerat accusantium nisi.
            </p>
          </div>
          <div className="newBeer">
            <Link to="/new-beer">
              <img src={newBeer} alt="new-Beer" />
            </Link>
            <h2>New Beer</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores inventore facilis numquam soluta nesciunt, saepe itaque
              nam aliquam temporibus quo nostrum corrupti libero eveniet dolorum
              dolore, nemo quaerat accusantium nisi.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
