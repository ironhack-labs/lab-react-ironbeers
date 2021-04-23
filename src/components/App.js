import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route } from 'react-router-dom';

import NavBar from './NavBar/NavBar';
import Home from './Home';
import Beers from './Beers/Beers';
import BeerDetail from './Beers/BeerDetail';
import RandomBeer from './RandomBeer/RandomBeer';
import NewBeer from './Form/NewBeer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Route exact path="/" component={Home} />
        <Route exact path="/all-beers" component={Beers} />
        <Route exact path="/all-beers/:_id" component={BeerDetail} />
        <Route exact path="/random-beers/" component={RandomBeer} />
        <Route exact path="/new-beer" component={NewBeer} />
      </BrowserRouter>
    </div>
  );
}

export default App;
