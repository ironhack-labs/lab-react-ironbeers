import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import allBeersImg from '../images/all-beers.jpg';
import newBeerImg from '../images/new-beer.jpg';
import randomBeerImg from '../images/random-beer.jpg';

class Home extends Component {
  render() {
    return (
      <Fragment>
        <div>
        <Link to='/beers'>
          <figure id='all-beers'><div style={{backgroundImage: `url(${allBeersImg})`}}></div></figure>
          <span>All beers</span>
        </Link>
        </div>
        <div>
        <Link to='/random-beer'>
          <figure id='random-beer'><div style={{backgroundImage: `url(${randomBeerImg})`}}></div></figure>
          <span>Random beer</span>
        </Link>
        </div>
        <div>
        <Link to='/new-beer'>
          <figure id='new-beer'><div style={{backgroundImage: `url(${newBeerImg})`}}></div></figure>
          <span>New beer</span>
        </Link>
        </div>
      </Fragment>
    );
  }
}

export default Home;