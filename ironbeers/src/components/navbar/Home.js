import React from 'react';
import { Link } from 'react-router-dom'
import Beers from './../Beers'

const Home = () => {
    return (
        <div >  
        <div className="homeoptions">    
            <Link to={'/beers'}><h3>All Beers</h3></Link>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>  
          <div className="homeoptions">  
            <Link to={'/random-beer'}><h3>Random Beer</h3></Link>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
            <div className="homeoptions">
            <Link to={'/new-beer'} className="home-links"><h3>New Beer</h3></Link>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
        </div>
    )
  }


export default Home;