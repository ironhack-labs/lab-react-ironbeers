import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home'
import BeerList from './pages/BeerList/BeerList'
import SingleBeer from './pages/SingleBeer/SingleBeer'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/beers' component={BeerList} />
        <Route exact path='/beers/:id' component={SingleBeer} />
      </Switch>
    </div>
  );
}

export default App;
