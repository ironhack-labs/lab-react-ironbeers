import React from 'react';
import HomeCard from '../../components/HomeCard';
import beerImg from '../../assets/beers.png'
import newBeerImg from '../../assets/new-beer.png'
import randomBeerImg from '../../assets/random-beer.png'
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='Home'>
      <Link to='/beers'>
        <HomeCard img={beerImg}>
          <div className='in-link'>
            <h4>All beers</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ac nibh ut sapien dictum finibus sit amet ac ligula.</p>
          </div>
        </HomeCard>
      </Link>
      <Link to='/beers/random-beer'>
        <HomeCard img={randomBeerImg}>
          <h4>Random beer</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ac nibh ut sapien dictum finibus sit amet ac ligula.</p>
        </HomeCard>
      </Link>
      <Link to='/beers/new'>
        <HomeCard img={newBeerImg}>
          <h4>New beer</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ac nibh ut sapien dictum finibus sit amet ac ligula.</p>
        </HomeCard>      
      </Link>
    </div>
  );
};

export default Home;