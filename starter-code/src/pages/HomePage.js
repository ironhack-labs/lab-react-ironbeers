import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class HomePage extends Component {
  render() {
    return (
      <div className="homepage">
        <Link className='homepage-item' to='/beers'>
          <img className="homepage-img" src="/images/beers.png" alt="allbeers"/>
          <div className="homepage-item-description">
            <h2>All Beers</h2>  
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab amet neque alias. Magni id mollitia architecto laborum.</p>
          </div>
        </Link>
        <Link className='homepage-item' to='/random-beer'>
          <img className="homepage-img" src="/images/random-beer.png" alt="randombeer"/> 
          <div className="homepage-item-description">
            <h2>Random Beer</h2> 
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab amet neque alias. Magni id mollitia architecto laborum.</p>
          </div>
        </Link>
        <Link className='homepage-item' to='/new-beer'>
          <img className="homepage-img" src="/images/new-beer.png" alt="newbeer"/> 
          <div className="homepage-item-description">
            <h2>New Beer</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab amet neque alias. Magni id mollitia architecto laborum.</p>
          </div>
        </Link>
      </div>
    );
  }
}

export default HomePage;