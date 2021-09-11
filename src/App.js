import React from 'react';
import BeerList from './Components/BeerList/BeerList';
import Home from './Components/Home/Home';
import SingleBeer from "./Components/SingleBeer/SingleBeer"
import BeerForm from './Components/BeerForm/BeerForm';
import logo from './logo.svg';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.css"

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path="/beers" component={BeerList} />
        <Route path="/new-beer" component={BeerForm} />
        <Route path="/:id" component={SingleBeer} />
      </Switch>
    </div>
  );
}

export default App;
