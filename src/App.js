import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Beers from './pages/Beers';
import RandomBeer from './pages/RandomBeer';
import NewBeer from './pages/NewBeer';
import BeerDetail from './pages/BeerDetail';

function App() {
  return (
    <div className="App">
      
      <main className="content">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/beers" component={Beers} />
          <Route exact path="/beers/:beerId" component={BeerDetail} />
          <Route exact path="/random-beer" component={RandomBeer} />
          <Route path="/new-beer" component={NewBeer} />
        </Switch>
      </main>
    </div>
  );
}

export default App;
