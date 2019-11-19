import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import allbeerimg from '../images/beers.png';
import randombeerimg from '../images/random-beer.png';
import newbeerimg from '../images/new-beer.png';

export default class Home extends Component {
  render() {
    return (
      <div>
      <header className="homeiconbar">
           <h1>IRONBEERS</h1>
      </header> 
      <nav className="home">
      <Link to="/beers">
        <img src={allbeerimg} alt="" />
        <div className="container">
          <h2>All Beers</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
      </Link>
      <Link to="/random-beer">
        <img src={randombeerimg} alt="" />
        <div className="container">
          <h2>Random Beer</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
      </Link>
      <Link to="/new-beer">
        <img src={newbeerimg} alt="" />
        <div className="container">
          <h2>New Beer</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
      </Link>
    </nav>
    </div>
    )
  }
}

