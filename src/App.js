import React,{useEffect}  from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import AllBeers from "./views/AllBeers/AllBeers"
import NewBeer from "./views/NewBeer/NewBeer"
import RandomBeer from "./views/RandomBeer/RandomBeer"
import Home from './components/Home/Home';
import Abeer from "./views/aBeer/aBeer"
import useFetch from './useFetch';

function App() {
  const {data:Beers} = useFetch("https://ih-beers-api2.herokuapp.com/beers")

 
  return (
    <div className="App">
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/beers">
       {Beers && <AllBeers Beers = {Beers} title ="All Beers" />} 
      </Route>
      <Route exact path="/beers/:id">
        <Abeer />
      </Route>
      <Route exact path="/random-beer">
        <RandomBeer />
      </Route>
      <Route exact path="/new-beer">
        <NewBeer />
      </Route>
     
    </div>
  );
}

export default App;
