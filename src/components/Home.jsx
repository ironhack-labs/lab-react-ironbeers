import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import AllBeers from '../assets/beers.png'
import NewBeers from '../assets/new-beer.png'
import RandomBeer from '../assets/random-beer.png'
import { Link } from 'react-router-dom'
import axios from 'axios'


function Home() {
  const [oneBeer, setOneBeer] = useState('');
  const handleOneBeer = (e) => setOneBeer(e.target.value);

  const handleSearch = async (e) => {
    e.preventDefault();

    try {
      await axios.get('https://ih-beers-api2.herokuapp.com/beers');

    } catch (error) {
      console.log(error)

    }
  }

  return (
    <div>
      <Navbar />
      <img src={AllBeers} alt="All Beers" />
      <Link to='/beers' onClick={handleOneBeer} >
        <h1>All Beers</h1>
        <p>orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
      </Link>
      <img src={NewBeers} alt="New Beers" />
      <Link to='/beers'>
        <h1>Random Beers</h1>
        <p>orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
      </Link>
      <img src={RandomBeer} alt="Random Beer" />
      <Link to='/beers'>
        <h1>New Beer</h1>
        <p>orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
      </Link>
    </div>
  )
}

export default Home