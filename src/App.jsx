import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import NavBar from './Components/NavBar';
import Home from './Views/Home';
import AllBeers from './Views/AllBeers';
import RandomBeer from './Views/RandomBeer';
import NewBeer from './Views/NewBeer';
import OneBeer from './Views/OneBeer';

function App() {

  return (
    <div className="App">

      <NavBar/>

      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/beers" component={AllBeers}/>
        <Route exact path="/randombeer" component={RandomBeer}/>
        <Route exact path="/newbeer" component={NewBeer}/>
        <Route exact path="/beers/:id" component={OneBeer}/>
      </Switch>

    </div>
  );
}

export default App;
