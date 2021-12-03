import React from "react";
import './App.css';
import { Switch, Route } from 'react-router-dom'
import Home from './Components/index/Home';
import RandomBeers from './Components/RandomBeers/RandomBeers';
import ListBeers from "./Components/ListBeers/ListBeers";
import SingleBeer from "./Components/SingleBeer/SingleBeer";
import CreatBeer from "./Components/CreatBeer/CreatBeer";



function App() {
  return (
    <>
  
      <main>
        <Switch>
          <Route path="/" exact render={() => <Home />} />
          <Route path="/allBeers" render={() => <ListBeers />} />
          <Route path="/beer/:id" render={() => <SingleBeer />} />
          <Route path="/beers/random" render={() => <RandomBeers />} />
          <Route path="/newBeer" render={() => <CreatBeer />} />
          {/* <Route path="/beer/:id" render={(props) => <SingleBeer {...props} />} /> */}
        </Switch>
      </main>
    </>
  )
}

export default App;
