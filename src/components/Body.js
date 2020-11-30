import React from 'react';
import './Body.css';
import { Link } from 'react-router-dom';

const Body = () => {
  return (
    <div className='body'>

      <Link style={{textDecoration:'none'}} to='/beers'>
        <div className='bodyCard'>
          <img src={require('../images/Beers.png')} alt='bar'></img>
          <h1>Beers</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
      </Link>

      <Link style={{textDecoration:'none'}} to='/random-beer'>
      <div className='bodyCard'>
          <img src={require('../images/Random-beers.png')} alt='beers'></img>
          <h1>Random Beer</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
      </Link>

      <Link style={{textDecoration:'none'}} to='/new-beer'>
      <div className='bodyCard'>
          <img src={require('../images/New-beer.png')} alt='beer'></img>
          <h1>New Beer</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
      </Link>
      
    </div>
  );
};

export default Body;