import './App.css';
import React from 'react';
import Home from './views/Home';
import BeersPage from './views/BeersPage';
import RandomBeerPage from './views/RandomBeerPage';
import NewBeerPage from './views/NewBeerPage';
import OneBeerPage from './views/OneBeerPage';

import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/beers" component={BeersPage} />
        <Route exact path="/beers/:id" component={OneBeerPage} />
        <Route exact path="/random-beer" component={RandomBeerPage} />
        <Route exact path="/new-beer" component={NewBeerPage} />
      </Switch>
    </div>
  );
}

export default App;
