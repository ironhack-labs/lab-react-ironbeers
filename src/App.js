import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom"
import './App.css';
import Home from "./components/Home"
import ListBeers from "./components/ListBeers"
import NewBeer from "./components/NewBeer"
import RandomBeer from "./components/RandomBeer"
import SingleBeer from "./components/SingleBeer"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
  
        <Switch>

          <Route exact path="/" component={Home}/>
          <Route exact path="/ListBeers" component={ListBeers}/>
          <Route exact path="/NewBeer" component={NewBeer}/>
          <Route exact path="/RandomBeer" component={RandomBeer}/>
          <Route exact path="/beers/:beerId" component={SingleBeer}/>

        </Switch>

      </BrowserRouter>
    </div>
  );
}

export default App;
