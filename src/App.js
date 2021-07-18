import { Switch, Route} from "react-router-dom";
import React, { useState, useEffect }from 'react';
import './App.css';
import Home from './components/Home'
import BeersList from "./components/BeersList";
import BeerDetail from "./components/BeerDetail";
import RandomBeer from "./components/RandomBeer";
import NewBeer from "./components/NewBeer";
import axios from "axios"

function App() {

  const [beers, updateBeers] = useState([])

  // similar to didMount, load all the beers
  useEffect(async () => {
    try {
      let response = await axios.get(`https://ih-beers-api2.herokuapp.com/beers`)
      updateBeers(response.data)
    }  
    catch(err){
      console.log('Beers fetch failed', err)
    }
  }, [])





  return (
    <div >
      <Switch>
        <Route exact path={'/'}  render={() => {
          return <Home />
        }} />
        <Route exact path={'/beers'}  render={() => {
          return <BeersList beers = {beers}/>
        }} />
        <Route exact path={'/beers/:id'}  render={(routeProps) => {
          return <BeerDetail {...routeProps} />
        }} />
        <Route exact path={'/random'}  render={() => {
          return <RandomBeer />
        }} />
        <Route exact path={'/new'}  render={() => {
          return <NewBeer />
        }} />






      </Switch>
    </div>
  );
}

export default App;
