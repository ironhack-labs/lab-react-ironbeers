import React from 'react';
import './App.css';
import Home from "./Home";
import Beers from "./Beers";
import SingleBeer from "./SingleBeer";
import RandomBeer from "./RandomBeer";
import NewBeer from "./NewBeer";
import { Route, Switch } from 'react-router-dom';

const NotFound = () => {
  return <h3>Not Found</h3>
}

function App() {
  return (
    <div className="App">
    
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/beers" component={Beers} />
        <Route exact path="/beers/:id" component={SingleBeer} />
        <Route exact path="/random-beer" component={RandomBeer} />
        <Route exact path="/new-beer" component={NewBeer} />
        <Route component={NotFound} />
      </Switch>
      {/* <Home />
      <About />
      <Projects /> */}
    </div>
  );
}

export default App;
