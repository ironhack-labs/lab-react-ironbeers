import React from 'react';
import './App.css';
import Home from './component/home/Home'
import Beers from './component/beers/Beers'
import RandomBeers from './component/random-beers/RandomBeers'
import NewBeers from './component/new-beers/NewBeers'
import OneBeer from './component/one-beer/OneBeer'
import { Switch, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/beers/:beerId' component={OneBeer} />        
        <Route path='/beers' component={Beers} />
        <Route path='/beers/random' component={RandomBeers} />
        <Route path='/new-beers' component={NewBeers} />        
      </Switch>
    </div>
  );
}

export default App;
