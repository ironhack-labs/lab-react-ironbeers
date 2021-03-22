import React from 'react';
import { Switch, Route } from "react-router-dom";
import Home from "././components/Home.jsx";
import Beers from '././components/Beers.jsx';
import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/beers" component={Beers} />
      </Switch>
    </div>
  );
}

