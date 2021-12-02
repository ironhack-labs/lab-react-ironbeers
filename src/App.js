import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Switch, Route } from 'react-router-dom'
import Home from './components/pages/index/Home';
import BeerList from './components/pages/beerList/BeerList';
import RandomBeer from './components/pages/beerList/RandomBeer';


function App() {
  return (
    <>




    <main>
      <Switch>
        <Route path="/" exact render={() => <Home />}/>
        <Route path="/all-beers" exact render={() => <BeerList />} />
        <Route path="/random-beer" exact render={() => <RandomBeer />} />
        <Route path="/new-beer" exact render={() => <Home />} />



      </Switch>
    </main>
    </>
  );
}

export default App;
