import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class HomePage extends Component {
  render() {
    return (
      <div>
        <Link to='/beers'>
          <img src="/images/beers.png" alt="allbeers"/>
          <h2>All Beers</h2>  
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab amet neque alias. Magni id mollitia architecto laborum.</p>
        </Link>
        <Link to='/random-beer'>
          <img src="/images/random-beer.png" alt="randombeer"/> 
          <h2>Random Beer</h2> 
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab amet neque alias. Magni id mollitia architecto laborum.</p>
        </Link>
        <Link to='/new-beer'>
          <img src="/images/new-beer.png" alt="newbeer"/> 
          <h2>New Beer</h2>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab amet neque alias. Magni id mollitia architecto laborum.</p>
        </Link>
      </div>
    );
  }
}

export default HomePage;