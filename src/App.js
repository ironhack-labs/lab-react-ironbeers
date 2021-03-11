import React from 'react';
import { Route, Switch, Redirect } from 'react-router';
import './App.css';
import HomePage from './components/home-page/HomePage';
import ListBeers from './components/list-beers/ListBeers';
import RandomBeer from './components/random-beer/RandomBeer';
import NewBeer from './components/new-beer/NewBeer';
//import BeerDetail from './components/beer-detail/BeerDetail';


//<Route exact path="/beers/:id" component={BeerDetail} />


function App() {
  return (
    <div className="App">

      <Switch>        
        <HomePage exact path="/home" component={HomePage} />
        <Route exact path="/beers" component={ListBeers} />
        
        <Route exact path="/random-beer" component={RandomBeer} />
        <Route exact path="/new-beer" component={NewBeer} />
        <Redirect to="/home" />
      </Switch>


    </div>

  );
}

export default App;
