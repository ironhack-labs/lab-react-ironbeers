import React from 'react';
import './App.css';
import { Link, Route } from 'react-router-dom';
import Beers from './components/beers/Beers';
import NewBeer from './components/newBeer/NewBeer';
import RandomBeer from './components/randomBeer/RandomBeer';
import 'bulma/css/bulma.css';
import Details from './components/details/Details';


function App() {
  return (
    <div className="App">
      <Link className="py-3 px-3 is-inline-block" to="/beers">Beers</Link>
      <Link className="py-3 px-3 is-inline-block" to="/random-beer"> Random Beer</Link>
      <Link className="py-3 px-3 is-inline-block" to="/new-beer">New Beer</Link>
      <Route exact path="/beers"><Beers /></Route>
      <Route path="/random-beer"><RandomBeer /></Route>
      <Route path="/new-beer"><NewBeer /></Route>
      <Route path="/beers/:beerId" component={Details} />
    </div>
  );
}

export default App;
