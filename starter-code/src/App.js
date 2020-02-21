import React from 'react';
import { Switch, Route } from "react-router-dom";

// Components


// Views
import Beers from "./views/Beers"
import RandomBeer from "./views/RandomBeer"
import NewBeer from "./views/NewBeer"
import Home from "./views/Home"
import SingleBeer from "./views/SingleBeer"



import './App.css';

function App() {
  return (
    <div className="App">

      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/beers" component={Beers} />
        <Route exact path="/beers/:id" component={SingleBeer} />
        <Route path="/random-beer" component={RandomBeer} />
        <Route path="/new-beer" component={NewBeer} />
      </Switch>


    </div>
  );
}

export default App;
