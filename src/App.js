import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Beer from './components/Beer';
import Details from './components/Details';
import Random from './components/Random';
import Add from './components/Add';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" component={Homepage} exact />
        <Route path="/beers" component={Beer} exact />
        <Route path="/beers/:id" component={Details} exact />
        <Route path="/random-beer" component={Random} exact />
        <Route path="/add-beer" component={Add} exact />
      </Switch>
    </div>
  );
}

export default App;
