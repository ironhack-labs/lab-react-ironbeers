import React from 'react';
import { Link } from 'react-router-dom';
import './beerhome.css'


function BeerHome (){


  return(
    <div className='homepage'>
      <div className='home-section'>
        <img src='../../../img/beers.png' alt='beerslink'></img>
        <div className='homewords'>
        <Link exact to={'/beers'} className='homelink'>
              <h1>All Beers</h1>
            </Link>
        <h4>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
          sed do eiusmod tempor incididunt ut labore et dolore magna 
          aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
          ullamco laboris nisi ut aliquip ex ea commodo consequat.</h4>
        </div>
      </div>
      <div className='home-section'>
        <img src='../../../img/random-beer.png' alt='randombeer'></img>
        <div className='homewords'>
        <Link exact to={'/random'} className='homelink'>
              <h1>Random Beer</h1>
            </Link>
        <h4>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
          sed do eiusmod tempor incididunt ut labore et dolore magna 
          aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
          ullamco laboris nisi ut aliquip ex ea commodo consequat.</h4>
        </div>
      </div>
      <div className='home-section'>
        <img src='../../../img/new-beer.png' alt='newbeer'></img>
        <div className='homewords'>
        <h1>New Beer</h1>
        <h4>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
          sed do eiusmod tempor incididunt ut labore et dolore magna 
          aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
          ullamco laboris nisi ut aliquip ex ea commodo consequat.</h4>
        </div>
      </div>
    </div>
  )


}

export default BeerHome;