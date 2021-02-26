import React from 'react';
import './Home.css'
import { Link } from 'react-router-dom'
import beers from './beers.png'
import randomBeer from './random-beer.png'
import newBeer from './new-beer.png'

const Home = () => {
  return (
      <>
          <Link className='home-links' to='/beers'>
      <article>
        <img src={beers} alt="beers"></img>
        <h2>All beers</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque impedit possimus in ratione. Mollitia nam, fugit magni esse architecto unde inventore qui modi cum laboriosam dolorum aut voluptates est culpa.</p>
      </article>
          </Link>
      
          <Link className='home-links' to='/random-beers'>
      <article>
        <img src={randomBeer} alt="random-beer"></img>
        <h2>Random Beers</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque impedit possimus in ratione. Mollitia nam, fugit magni esse architecto unde inventore qui modi cum laboriosam dolorum aut voluptates est culpa.</p>
          </article>
          </Link>
        
        <Link className='home-links' to='/new-beer'>
      <article>
        <img src={newBeer} alt="new-beer"></img>
        <h2>New Beer</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque impedit possimus in ratione. Mollitia nam, fugit magni esse architecto unde inventore qui modi cum laboriosam dolorum aut voluptates est culpa.</p>
      </article>
      </Link>
    </>
  );
};

export default Home;
