import React from 'react';
import Navbar from './components/Navbar';
import Homepage from './components/Homepage';
import Beers from './components/Beers';
import RandomBeer from './components/RandomBeer';
import NewBeer from './components/Newbeer';
import BeerDetail from './components/BeerDetail'
import './App.css';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
          <Route exact path='/' component={Homepage}/>
          <Route exact path='/beers' component={Beers}/>
          <Route path='/random-beer' component={RandomBeer}/>
          <Route path='/new-beer' component={NewBeer}/>
          <Route path='/beers/:beerId' component={BeerDetail}/>
        </Switch>
    </div>
  );
}

export default App;
