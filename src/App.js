
import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom'



import Beers from './components/'
import RandomBeer from './components/Random-beer'
import NewBeer from './components/New-Beer'



function App() {
  return (
    <>
      <Switch>
        <Route path="/beers" exact component={Beers} />
        <Route path="/coasters/:id" exact component={RandomBeer} />
        <Route path="/newCoaster" exact component={NewBeer} />
      </Switch>
    </>
  );
}

export default App;
