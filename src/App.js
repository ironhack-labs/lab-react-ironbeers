import React from 'react';
import './App.css';
import Home from "./components/Home";
import Beers from "./components/Beers";

import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
    <Switch>
    <Route path="/home" component={Home} />
    <Route path="/beers" component={Beers} />
    </Switch>
    </div>
  );
}

export default App;
