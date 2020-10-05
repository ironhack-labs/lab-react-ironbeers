import React from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import './App.css';
import AllBeers from './components/AllBeers/AllBeers';
import Home from './components/Home/Home';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/allbeers" exact component={AllBeers} />
        </Switch>
      </Router>
      <br />
      <Home />
    </div>
  );
}

export default App;
