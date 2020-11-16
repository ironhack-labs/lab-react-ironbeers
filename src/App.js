import React from 'react';
import './App.css';
import Home from './pages/Home';
import ListBeers from './pages/ListBeers';
import RandomBeer from './pages/RandomBeer';
import NewBeer from './pages/NewBeer';
import { Link, Switch, Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <h1>Iron Beers</h1>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/list-beers" component={ ListBeers } />
        <Route exact path="/new-beer" component={NewBeer} />
        <Route exact path="/random-beer" component={RandomBeer} />
      </Switch>
    </div>
  );
}
export default App;