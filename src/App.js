import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import { Link } from 'react-router-dom';
import { Route, Switch } from 'react-router';
import Beers from './pages/Beers';
import RandomBeer from './pages/RandomBeer';
import NewBeer from './pages/NewBeer';
import BeerDetails from "./pages/BeerDetails";

function App() {
  return (
    <div className="App">
      
      <Link to="/">Go home</Link>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/beers" component={Beers} />
        <Route exact path="/random-beer" component={RandomBeer} />
        <Route exact path="/newBeer" component={NewBeer} />
        <Route path = "/beers/:id" component = {BeerDetails} />
        <Route path="*" render={() => <div>404 NOT FOUND</div>} />
      </Switch>
    </div>
  );
}

export default App;
