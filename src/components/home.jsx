import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import randomBeerImage from './../assets/random-beer.png';
import newBeerImage from './../assets/new-beer.png';
import beersImage from './../assets/beers.png';

class Home extends Component {
  render() {
    return (
      <div>

        <Link to={'/beers'}>  <h1>All Beers</h1> 
          <img src={beersImage} alt="" />
       
        </Link>
        <Link to={'/random-beer'}> <h1>  Random Beer</h1>
          <img src={randomBeerImage} alt="" />
        
        </Link>
        <Link to={'/new-beer'}> <h1> New Beer</h1>
          <img src={newBeerImage} alt="" />
         
        </Link>
      </div>
    );
  }
}

export default Home;
