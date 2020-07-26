import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

import Home from './components/Home';
import AllBeers from './components/AllBeers';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/beers" render={(props) => <AllBeers {...props} />} />
    </Switch>
  );
}

export default App;
