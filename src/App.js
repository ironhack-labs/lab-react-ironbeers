import React from 'react';
import './App.css';
import { Route, Switch } from "react-router-dom";
import AllBeers from './components/AllBeers'
import RandomBeer from './components/RandomBeer'
import NewBeer from './components/NewBeer'
import Home from './components/Home'
import BeerDetails from './components/BeerDetails';


const NotFound = () => {
  return <h1>404 Not Found <span>🙃</span></h1>
}

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/beers" component={AllBeers} />
        <Route exact path="/random-beer" component={RandomBeer} />
        <Route exact path="/new-beer" component={NewBeer} />
        <Route exact path="/beers/:id" component={BeerDetails} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
