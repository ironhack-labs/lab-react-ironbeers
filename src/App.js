import React from 'react';
import './App.css';
import { Link, Route } from 'react-router-dom';
import Beers from './components/Beers';
import AddBeer from './components/AddBeer';
import RandomBeer from './components/RandomBeer';
import 'bulma/css/bulma.css';
import Details from './components/Details';


function App() {
  return (
    <div className="App">
      <Link className="py-3 px-3 is-inline-block" to="/beers">Beers</Link>
      <Link className="py-3 px-3 is-inline-block" to="/random-beer"> Random Beer</Link>
      <Link className="py-3 px-3 is-inline-block" to="/new-beer">New Beer</Link>
      <Route exact path="/beers"><Beers /></Route>
      <Route path="/random-beer"><RandomBeer /></Route>
      <Route path="/new-beer"><AddBeer /></Route>
      <Route path="/beers/:beerId" component={Details} />
    </div>
  );
}

export default App;
