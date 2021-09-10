import React from 'react';
import BeerList from './Components/BeerList/BeerList';
import Home from './Components/Home/Home';
import SingleBeer from "./Components/SingleBeer/SingleBeer"
import logo from './logo.svg';
import './App.css';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path="/beers" component={BeerList} />
        <Route path="/:id" component={SingleBeer} />
      </Switch>
    </div>
  );
}

export default App;
