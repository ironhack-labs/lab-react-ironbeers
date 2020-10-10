import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home'
import Beers from './components/Beers'
import BeerDetails from './components/BeerDetails'


function App() {
  return (
    <div className="App">

      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/beers' component={Beers} />
        <Route path='/beers/:id' component={BeerDetails} />
      </Switch>

    </div>
  );
}

export default App;
