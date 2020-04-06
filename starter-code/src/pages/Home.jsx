import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../stylesheets/Home.css';

class Home extends Component {
  render() {
    return (
      <div className="Home container-fluid">
        <Link className="Home-link container-fluid" to="/ListBeers">
          <img src="../images/beers.png" alt="" className="Home-img" />
          <h1 className="Home-heading">All Beers</h1>
        </Link>
        <Link className="Home-link" to="/RandomBeer">
          <img src="../images/random-beer.png" alt="" className="Home-img" />
          <h1>Random Beer</h1>
        </Link>
        <Link className="Home-link" to="/AddNewBeer">
          <img src="../images/new-beer.png" alt="" className="Home-img" />
          <h1> Add a new beer</h1>
        </Link>
      </div>
    );
  }
}

export default Home;
