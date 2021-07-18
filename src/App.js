import { Switch, Route } from "react-router-dom";
import React, { useState, useEffect }from 'react';
import { useHistory } from "react-router";
import './App.css';
import Home from './components/Home'
import BeersList from "./components/BeersList";
import BeerDetail from "./components/BeerDetail";
import RandomBeer from "./components/RandomBeer";
import NewBeer from "./components/NewBeer";
import axios from "axios"

function App(props) {
  console.log("props",props)

  const [beers, updateBeers] = useState([]);
  const history = useHistory();

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

  // Redirecting back to home when the state "beers" is updated
  useEffect(() => {
    history.push('/')
  }, [beers])

  // Adding a beer
  const handleAddBeer = async (event) => {

    event.preventDefault();

    try{
      let newBeer = {
        name: event.target.name.value,
        tagline : event.target.tagline.value,
        description: event.target.description.value,
        first_brewed: event.target.first_brewed.value,
        brewers_tips: event.target.brewers_tips.value,
        attenuation_level : event.target.attenuation_level.value,
        contributed_by : event.target.contributed_by.value
      }
      let response = await axios.post(`https://ih-beers-api2.herokuapp.com/beers/new`, newBeer)
      updateBeers([response.data, ...beers])

    }
    catch(err){
      console.log("Add a beer failed", err)
    }

  }





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
          return <NewBeer onAdd = {handleAddBeer}/>
        }} />






      </Switch>
    </div>
  );
}

export default App;
