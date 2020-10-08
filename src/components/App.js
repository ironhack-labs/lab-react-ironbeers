import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Header from './Header';
import HomePage from './HomePage'
import ListBeers from './ListBeers';
import NewBeer from './NewBeer';
import RandomBeer from './RandomBeer';
import SingleBeer from './SingleBeer';


function App() {
  const urlRoute = 'https://ih-beers-api2.herokuapp.com/beers'
  return (
      <div>
      
        <BrowserRouter>
        <Header/>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/beers/:id' component={SingleBeer} />
          <Route exact path='/beers' component={ListBeers} />
          <Route exact path='/randombeer' component={RandomBeer} />
          <Route exact path='/newbeer' component={NewBeer} />
          </BrowserRouter>
      </div>

    );
}

export default App;
