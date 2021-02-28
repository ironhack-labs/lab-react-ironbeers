import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Beers from './components/Beers';
import RandomBeer from './components/RandomBeer';
import NewBeer from './components/NewBeer';
import detailedBeer from './components/detailedBeer';



function App() {
  return (
  <>
      <Navbar />
      <Switch>  
      <Route exact path='/' component={Home}/>
      <Route exact path='/beers' component={Beers}/>
      <Route exact path='/random-beer' component={RandomBeer} />
      <Route exact path='/new-beer' component={NewBeer} />
      <Route exact path='/beers/:Id' component={detailedBeer} />
    </Switch>
      </>
  );
}

export default App;
