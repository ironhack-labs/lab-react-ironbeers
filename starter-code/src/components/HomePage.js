import React, { Component } from 'react';
import {Link, Route } from  "react-router-dom";
import Beers from './Beers';
import RandomBeers from './RandomBeers';
import NewBeers from './NewBeers';
import '../index.css';

class HomePage extends Component {
    render() {
        return (
            <div className='container'>
            
               <div className=''>
                <img src='./images/beers.png'/>
                <Link to='/beers' className='link'>Beers</Link>
                <Route exact path='/beers' component={Beers}></Route>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
               </div>

               <div className=''>
                <img src='./images/random-beer.png'/>
                <Link to='/random-beer' className='link'>RandomBeers</Link>
                <Route exact path='/random-beer' component={RandomBeers}></Route>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
               </div>

               <div className=''>
                <img src='./images/new-beer.png'/>
                <Link to='/new-beer' className='link'>NewBeers</Link>
                <Route exact path='/new-beer' component={NewBeers}></Route>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>  
               </div> 
                
                
            </div>
        )
    }
}

export default HomePage;
