import React from 'react';
import { Route, Switch } from "react-router-dom"
// import Navbar from './components/Nabvar/Navbar'
import Home from './components/Home/Home'
import AllBeers from './components/AllBeers/AllBeers'
import RandomBeer from './components/RandomBeer/RandomBeer'
import NewBeer from './components/NewBeer/NewBeer'
import './App.css';

function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}

      <Switch>
        <Route path="/beers" component={AllBeers}/>
      <Route path="/random-beer" component={RandomBeer}/>
        <Route path="/new-beer" component={NewBeer}/>
        <Route path="/" exact component={Home}/>
        <Route>NOT FOUND</Route>
      </Switch>
    </div>
  );
}

export default App;
