import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
// import Beers from './Beers';
// import NewBeers from './NewBeers'
// import RandomBeers from './RandomBeers'

export default class Nav extends Component {
  render() {

    return (
      <Fragment>
        <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
          <ul className='navbar-nav'>
            <li className='nav-item'><Link className='nav-link' to={'/'}>Home</Link></li>
            <li className='nav-item'><Link className='nav-link' to={'/Beers'}>Beers</Link></li>
            <li className='nav-item'><Link className='nav-link' to={'/RandomBeers'}>Random Beers</Link></li>
            <li className='nav-item'><Link className='nav-link' to={'/NewBeers'}>New Beers</Link></li>
          </ul>
        </nav>
      </Fragment >
    );
  }
}