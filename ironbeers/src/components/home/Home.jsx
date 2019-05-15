import React from 'react';
import Homebar from './img/home.png';
import Beers from './img/beers.png';
import RandomBeer from './img/random-beer.png';
import NewBeer from './img/new-beer.png';
import './Home.css';

const Home = () => {
  return(
    <div className="home">
        <figure>
          <img width="100%" src={Homebar} alt="beer-brands" />
          <a href="/"/>
        </figure>
        
      <div>
        <figure>
          <img src={Beers} alt="beer-brands" />
          <a href="/beers"/>
        </figure>
        <h1>All Beers</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu dolor in nunc posuere suscipit. Morbi lacus metus, ornare nec lobortis at, suscipit non ante. </p>
      </div>

      <div>
        <figure>
          <img src={RandomBeer} alt="beer-brands"/>
          <a href="/randombeer"/>
        </figure>
        <h1>Random Beer</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu dolor in nunc posuere suscipit. Morbi lacus metus, ornare nec lobortis at, suscipit non ante. </p>
      </div>

      <div>
        <figure>
          <img src={NewBeer} alt="beer-brands"/>
          <a href="/newbeer"/>
        </figure>
        <h1>New Beer</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu dolor in nunc posuere suscipit. Morbi lacus metus, ornare nec lobortis at, suscipit non ante. </p>
      </div>
    </div>
  )
}

export default Home;