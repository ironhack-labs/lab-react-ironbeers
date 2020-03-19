import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Home from "./components/home";
import Beers from "./components/beers";
import BeerId from "./components/beer-id";
import RandomBeer from "./components/beer-random";
import NewBeer from "./components/new-beer";
import MenuContextProvider from "./context/menu.context";

const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <MenuContextProvider>
          <Route exact path="/beers" component={Beers} />
          <Route path="/beers/:id" component={BeerId} />
          <Route path="/beer-random" component={RandomBeer} />
          <Route path="/new-beer" component={NewBeer} />
        </MenuContextProvider>
      </Switch>
    </div>
  );
};

export default App;
