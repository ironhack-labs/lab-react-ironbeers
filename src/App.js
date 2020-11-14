import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import { Route, Switch } from 'react-router-dom';
import Beers from './components/Beers';

function App() {
  return (
    <div className="App">
      <Home />
      <Switch>
        <Route exact path="/beers" component={Beers} />
        {/* <Route exact path="/random-beer" component={RandomBeer} /> */}
        {/* <Route exact path="/new-beer" component={NewBeer} /> */}
      </Switch>
    </div>
  );
}

export default App;
