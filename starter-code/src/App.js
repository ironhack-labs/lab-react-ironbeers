import React from "react";
import "./App.css";
import Beers from "./pages/Beers.jsx";
import RandomBeers from "./pages/RandomBeers";
import NewBeers from "./pages/NewBeers";
import Home from "./pages/Home";
import BeerDetail from "./pages/BeerDetail";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/beers" component={Beers} />
        <Route path="/random-beers" component={RandomBeers} />
        <Route path="/new-beers" component={NewBeers} />
        <Route path="/beer:_id" component={BeerDetail} />
        <Route render={() => <h1>404</h1>} />
      </Switch>
    </div>
  );
}

export default App;
