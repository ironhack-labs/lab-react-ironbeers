import React from 'react';
import './App.css';
import {Route} from 'react-router-dom';
import {Switch} from 'react-router-dom';
import Home from "./components/Home";
import Beers  from "./components/Beers";
import RandomBeer from "./components/RandomBeer";
import NewBeer from "./components/NewBeer";

function NotFound() {
  return <h1>404 - Not Found</h1>
}

function App() {

  return (
    <div className="App">
      <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/beers" component={Beers}/>
      <Route exact path="/random-beer" component={RandomBeer}/>  
      <Route exact path="/new-beer" component={NewBeer}/>
      <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
