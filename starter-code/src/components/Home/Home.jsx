import React, { Component } from 'react';
import BeersImg from "../../assets/images/beers.png";
import RandomBeerImg from "../../assets/images/random-beer.png";
import NewBeerImg from "../../assets/images/new-beer.png";
import { Link} from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <div>
        <div>
          <Link to="/beers">
            <img src={BeersImg} alt="beers"></img>
            <h1>All Beers</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex 
            ea commodo consequat.</p>
          </Link>
        </div>
        <div>
          <Link to="/randomBeer">
            <img src={RandomBeerImg} alt="random-beer"></img>
            <h1>Random Beer</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex 
            ea commodo consequat.</p>
          </Link>
        </div>
        <div>
          <Link to="/newBeer">
            <img src={NewBeerImg} alt="new-beer"></img>
            <h1>New Beer</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex 
            ea commodo consequat.</p>
          </Link>
        </div>
      </div>
    )
  }
}

export default Home
