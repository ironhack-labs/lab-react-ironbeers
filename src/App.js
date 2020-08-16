import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch, Route } from 'react-router-dom';
import Homepage from './components/Homepage';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Homepage} />
      <Route exact path="/beers" />
      <Route exact path="/random-beer" />
      <Route exact path="/new-beer" />
    </Switch>
  );
}

export default App;
