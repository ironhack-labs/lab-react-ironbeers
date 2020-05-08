import React from "react";
import { Link } from "react-router-dom";
import HomeHeader from "./HomeHeader";

function Home() {
  return (
    <div>
      <HomeHeader />
      <div className='home'>
        <div className='home__card'>
          <Link exact to='/beers'>
            <img src='./images/beers.png' alt='beer tap'></img>
            <h3 className='home__header'>All beers</h3>
          </Link>
          <p className='home__text'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
            reiciendis amet error, vel vitae ducimus sunt provident. Facilis,
            inventore soluta.
          </p>
        </div>
        <div className='home__card'>
          <Link exact to='/random'>
            <img src='./images/random-beer.png' alt='beer tap'></img>
            <h3 className='home__header'>Random beer</h3>
          </Link>
          <p className='home__text'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
            reiciendis amet error, vel vitae ducimus sunt provident. Facilis,
            inventore soluta.
          </p>
        </div>
        <div className='home__card'>
          <Link exact to='/new'>
            <img src='./images/new-beer.png' alt='beer tap'></img>
            <h3 className='home__header'>New beer</h3>
          </Link>
          <p className='home__text'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
            reiciendis amet error, vel vitae ducimus sunt provident. Facilis,
            inventore soluta.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
