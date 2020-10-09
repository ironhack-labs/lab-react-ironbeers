import React from "react";
import { Route, Switch } from "react-router-dom";
import NavMain from "./components/NavMain.jsx";
import Home from './pages/Home'
import Beers from './pages/Beers'
import RandomBeer from './pages/RandomBeer'
import AddBeer from './pages/AddBeer'
import "./App.css";

function App() {
  return (
    <div className="App">
      <NavMain />
      <Switch>
         <Route exact path="/" component={Home} />
        <Route exact path="/beers" component={Beers} />
        <Route exact path="/new-beer" component={AddBeer} />
        <Route exact path="/:id" component={RandomBeer} />
      </Switch>
    </div>
  );
}

export default App;
