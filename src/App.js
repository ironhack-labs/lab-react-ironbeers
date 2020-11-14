import React from 'react';
import {Switch, Route } from "react-router-dom"
import './App.css';
import Beers from "./components/Beers"
import NewBeer from "./components/NewBeer"
import RandomBeer from "./components/RandomBeer"
import Home from "./components/Home"
import BeerDetail from './components/BeerDetail';

function App() {
  return (
    <div className="App">
     
      <Switch >
        <Route exact path= "/" component={Home} />
        <Route exact path="/beers" component={Beers}/>
        <Route exact path= "/beers/:id" component={BeerDetail} />
        
        {/* <Route exact path="/random-beer" component={RandomBeer}/>
        <Route exact path="/new-beer" component={NewBeer} />  */}
      </Switch>
    </div>
  );
}

export default App;
