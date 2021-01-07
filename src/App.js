import React from 'react';
import './App.css';
import NavMain from './components/Header';
import RandomBeerPage from './views/RandomBeerPage';
import Home from './views/Home';
import BeersPage from './views/BeersPage';
import NewBeerPage from './views/NewBeerPage';
import OneBeerPage from './views/OneBeerPage';

// import AllBeers from './components/AllBeers';
// import BeerDetail from './components/BeerDetail';
// import Randombeer from './components/RandomBeer';
// import NewBeer from './components/NewBeer';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <NavMain />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/beers" component={BeersPage} />
        <Route exact path="/beers/:id" component={OneBeerPage} />
        <Route exact path="/random-beer" component={RandomBeerPage} />
        <Route exact path="/new-beer" component={NewBeerPage} />
      </Switch>
    </div>
  );
}

export default App;
