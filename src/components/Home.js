import React from 'react';
import { Link } from 'react-router-dom';
import allBeerImg from './img/Allbeers.png'
import randomBeerImg from './img/Randombeer.png'
import newBeerImg from './img/Newbeer.png'

function Home() {
  return (
    <div className='homePage'>
    <iframe width="110" height="200" src="https://www.myinstants.com/instant/alright-alright-alright-56826/embed/" frameborder="0" scrolling="no"></iframe>
      <h1>IronBeers</h1>
      <div className='beerSection'>
        <Link to="/beers">
          <img src={allBeerImg} alt="all-beers" />
          <h2>All Beers</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            aliquet fermentum felis eget facilisis. Pellentesque habitant morbi
            tristique senectus et netus et malesuada fames ac turpis egestas.
            Proin et mattis justo. Donec iaculis sem eu felis posuere,
            scelerisque posuere urna consectetur. Sed ac dapibus quam. Vivamus
            nec posuere sapien, eu pulvinar tellus. Sed eu eleifend nisi. Nam
            ornare felis vitae elit bibendum, ac tempus augue pulvinar. Mauris
            mollis est id neque eleifend commodo.
          </p>
        </Link>
      </div>
      <div className='beerSection'>
        <Link to="/random-beer">
          <img src={randomBeerImg} alt="random-beer" />
          <h2>Random Beers</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            aliquet fermentum felis eget facilisis. Pellentesque habitant morbi
            tristique senectus et netus et malesuada fames ac turpis egestas.
            Proin et mattis justo. Donec iaculis sem eu felis posuere,
            scelerisque posuere urna consectetur. Sed ac dapibus quam. Vivamus
            nec posuere sapien, eu pulvinar tellus. Sed eu eleifend nisi. Nam
            ornare felis vitae elit bibendum, ac tempus augue pulvinar. Mauris
            mollis est id neque eleifend commodo.
          </p>
        </Link>
      </div>
      <div className='beerSection'>
        <Link to="/new-beer">
          {' '}
          <img src={newBeerImg} alt="new-beer" />
          <h2>New Beer</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            aliquet fermentum felis eget facilisis. Pellentesque habitant morbi
            tristique senectus et netus et malesuada fames ac turpis egestas.
            Proin et mattis justo. Donec iaculis sem eu felis posuere,
            scelerisque posuere urna consectetur. Sed ac dapibus quam. Vivamus
            nec posuere sapien, eu pulvinar tellus. Sed eu eleifend nisi. Nam
            ornare felis vitae elit bibendum, ac tempus augue pulvinar. Mauris
            mollis est id neque eleifend commodo.
          </p>
        </Link>
      </div>
    </div>
  );
}

export default Home;
