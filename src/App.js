import React from 'react';
import {Route} from 'react-router-dom'
import './App.css';
import Home from './views/Home/Home'
import AllBeers from './views/Beers/Beers'
import RandomBeer from './views/RandomBeer/RandomBeer'
import NewBeer from './views/NewBeer/NewBeer'
import Beer from './views/Beer/Beer'

function App() {
  return (
    <div className="App">
      <Route exact path='/'>
        <Home></Home>
      </Route>
      <Route exact path='/beers'>
        <AllBeers></AllBeers>
      </Route>
      <Route exact path='/beers/:beerId'>
        <Beer></Beer>
      </Route>
      <Route exact path='/random-beer'>
        <RandomBeer></RandomBeer>
      </Route>
      <Route exact path='/new-beer'>
        <NewBeer></NewBeer>
      </Route>
    </div>
  );
}

export default App;
