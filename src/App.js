import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Home from "./components/Home";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import NewBeer from "./components/NewBeer";
import RandomBeer from "./components/RandomBeer";
import AllBeers from "./components/AllBeers";
import Beerdetails from "./components/Beerdetails";

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Home} />
      <Route path="/newbeer" component={NewBeer} />
      <Route path="/randombeer" component={RandomBeer} />
      <Route path="/allbeers" component={AllBeers} />
      <Route path="/beers/:id" component={Beerdetails} />
    </div>
  );
}

export default App;
