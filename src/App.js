import React from 'react';
import './App.css';
import { Switch, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar"
import HomePage from "./pages/HomePage/HomePage";
import BeerList from "./pages/BeerList/BeerList";
import BeerDetails from "./pages/BeerDetails/BeerDetails";
import NewBeer from "./pages/NewBeer/NewBeer";

function App() {
  
  return (
    <div className="App">
      <Navbar />
      <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/allbeers" component={BeerList} />
          <Route exact path="/allbeers/:beerId" component={BeerDetails} />
          <Route exact path="/randombeer" component={BeerDetails} />
          <Route exact path="/newbeer" component={NewBeer} />
      </Switch>
    </div>
  );
}

export default App;
