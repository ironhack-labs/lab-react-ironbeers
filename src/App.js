import React from 'react';
import './App.css';
import { Switch, Route, useParams } from "react-router-dom";

import Home from "./components/home";
import Beers from "./components/beers";
import RandomBeer from "./components/random-beer";
import AddNewBeer from "./components/new-beer";
import BeerSingle from "./components/beer-single";


// const addBeerHandler = (newBeerItem) => {
//   const stateCopy = [...foodState];
//   stateCopy.push(newBeerItem);
//   setBeerState(stateCopy);
  
// };

function App() {
  return (
    <div className="wrapper">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/beers" component={Beers} />
        <Route path="/beers/:id" component={BeerSingle} />
        <Route exact path="/random-beer" component={RandomBeer} />
        <Route exact path="/new-beer" component={AddNewBeer} />
      </Switch>
     
    </div>
  );
}


export default App;
