import { Switch, Route } from "react-router-dom";
import React from 'react';
import './App.css';
import Home from "./Components/Home";
import ListBeers from "./Components/ListBeers";
import SingleBeer from "./Components/SingleBeer";
import NewBeer from "./Components/NewBeer";
import NavBAr from "./Components/Navbar";
import RandomBeer from "./Components/RandomBeer";

function App() {
  return (
    <div className="App">
     <Route exact path={["/beers", "/random-beer", "/new-beer", "/beers/:id"]} component={NavBAr} /> 
      <Switch>
     <Route exact path="/" component={Home} />
     <Route exact path="/beers" component={ListBeers}  />
     <Route exact path="/random-beer" component={RandomBeer} />
     <Route exact path="/new-beer" component={NewBeer} />
     <Route exact path="/beers/:id" component={SingleBeer} />
     </Switch>
    </div>
  );
}

export default App;
