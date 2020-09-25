import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import allBeersImg from '../images/all-beers.jpg';

class Home extends Component {
  render() {
    return (
      <div>
        Home
        <figure id='all-beers'><div style={{backgroundImage: `url(${allBeersImg})`}}></div></figure>
        <Link to='/beers'>All beers</Link>
        <figure id='random-beer'><div style={{backgroundImage: `url(${allBeersImg})`}}></div></figure>
        <Link to='/random-beer'>Random beer</Link>
        <figure id='new-beer'><div style={{backgroundImage: `url(${allBeersImg})`}}></div></figure>
        <Link to='/new-beer'>New beer</Link>
      </div>
    );
  }
}

export default Home;