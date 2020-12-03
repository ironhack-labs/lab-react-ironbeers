import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './App.css';
import Home from "./Home"
import NewBeer from "./NewBeer"
import RandomBeer from "./RandomBeer"
import { Switch, Route } from 'react-router-dom'
import beerList from './Beers'

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/Beers" component={beerList} />
      <Route path="/new-beer" component={NewBeer} />
      <Route path="/random-beer" component={RandomBeer} />
    </Switch>  
  );
}

export default App;
