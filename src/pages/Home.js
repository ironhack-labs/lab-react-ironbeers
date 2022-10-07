import React from 'react'
import { Link } from "react-router-dom";
import AllBeers from '../assets/beers.png';
import RandomBeer from "../assets/random-beer.png"
import NewBeer from "../assets/new-beer.png";

const Home = () => {
  return (
    <div className="Home-container">
    <div className="container">
    <div className="tarjet">
      <Link to="/beers">
        <img src={AllBeers} alt="All beers"></img>
        <div className='content'>
        <h2>All Beers</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
        aliquip ex ea commodo consequat. Duis aute irure dolor in
        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
        culpa qui officia deserunt mollit anim id est laborum.
      </p>
      </div>
      </Link>
    </div>
    <div className="tarjet">
      <Link to="/random-beer">
        <img src={RandomBeer} alt="Random beer"></img>
        <div className='content'>
        <h2>Random Beer</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
        aliquip ex ea commodo consequat. Duis aute irure dolor in
        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
        culpa qui officia deserunt mollit anim id est laborum.
      </p>
      </div>
      </Link>
    </div>
    <div className="tarjet">
      <Link to="/new-beer">
        <img src={NewBeer} alt="New beer"></img>
        <div className='content'>
       
        <h2>New Beer</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
        aliquip ex ea commodo consequat. Duis aute irure dolor in
        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
        culpa qui officia deserunt mollit anim id est laborum.
      </p>
      </div>
      </Link>
    </div>
    </div>
  </div>
  )
}

export default Home