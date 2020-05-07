import React from 'react';
import { Route, Switch } from "react-router-dom"; 
import Home from "./views/Home";
import Beers from "./views/Beers";
import BeerDetail from "./views/BeerDetail";
import RandomBeer from "./views/RandomBeer";
import NewBeer from "./views/NewBeer";
// import NavBar from "./components/NavBar";
import logo from './logo.svg';
import './App.css';

// API https://ih-beers-api2.herokuapp.com/beers

const App = () => {
 
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Ironbeers</h1>
        </header>
        <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/beers" component={Beers} />
          <Route exact path="/random" component={RandomBeer} /> 
          <Route exact path="/new-beer" component={NewBeer} />
          <Route path="/:id" component={BeerDetail} /> 
        </Switch>
        </main>
      </div>
    );
  
}

export default App;
