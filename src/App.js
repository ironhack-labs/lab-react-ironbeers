import React from 'react';
import './App.css';
import Homepage from "./pages/Homepage";
import { Route, Switch } from 'react-router';
import AllBeers from "./components/AllBeers";
import BeerDetails from "./components/BeerDetails";
import RandomBeer from "./components/RandomBeer";
import BeerForm from "./components/BeerForm";



function App () {

  return (
    <div>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/beers" component={AllBeers} />
        <Route exact path="/beers/:id" component={BeerDetails} />
        <Route exact path="/random" component={RandomBeer} />
        <Route exact path="/new" component={BeerForm} />
      </Switch>
    </div>
  );
  }



export default App;