import React from 'react';
import Home from './Home/Home';
import { Switch, Route } from 'react-router-dom';
import AllBeers from './Beers/AllBeers';
import RandomBeer from './Beers/RandomBeer';
import NewBeer from './Beers/NewBeer';
import Header from './Header/Header';

import './App.css';

function App() {
  return (
    <div className="App">
      
    <Header> </Header>
    
    <Home> </Home>
      <Switch>


      <Route exact path="/beers" component={AllBeers} />
			<Route exact path="/random-beer" component={RandomBeer} />
			<Route exact path="/new-beer" component={NewBeer} />

      </Switch>
    </div>
  );
}

export default App;
