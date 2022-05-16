import React from 'react';
import { Link } from 'react-router-dom'; 
import beers from '../assets/beers.png';
import randombeer from '../assets/random-beer.png';
import newbeer from '../assets/new-beer.png';
import "./HomePage.css"

function HomePage() {

   return (
        <div className='BeersList'>
            <div className='beer-summary'>
                <img src={beers} alt="allbeers" />
                <h1>All Beers</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <Link to="/beers"> All Beers </Link>
            </div>
            <div className='beer-summary'>
               <img src={randombeer} alt="randombeer" />
               <h1>Random Beer</h1>
               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
               <Link to="/randombeer"> Random Beer </Link>
           </div>
           <div className='beer-summary'>
               <img src={newbeer} alt="newbeer" />
               <h1>New Beer</h1>
               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
               <Link to="/newbeer"> New Beer </Link>
           </div>
    </div>
           );
         }

 export default HomePage;