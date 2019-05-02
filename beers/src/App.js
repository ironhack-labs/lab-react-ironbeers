import React from "react";
import logo from "./beer.png";
import "./App.css";
import Home from "./components/home";
import beers from './components/beers';
import Navbar from "./components/navbar";
import RandomBeer from "./components/randomBeer";
import NewBeer from "./components/newBeer";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/beers" component={beers} />
        <Route exact path="/randomBeer" component={RandomBeer} />
        <Route exact path="/newBeer" component={NewBeer} />
      </Switch>
    </div>
  );
}

export default App;
