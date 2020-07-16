import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import AllBeers from './components/AllBeers'
import { Switch, Route } from 'react-router-dom'
import OneBeer from './components/BeerDetails'
import RandomBeer from './components/RandomBeer'
import NewBirra from './components/NewBeer'

function App() {
  return (
  

 <>

     <Switch>
     <Route exact path="/" render={() =>  <AllBeers/>} />
     <Route exact path="/Onebirra/:id" render={props =>  <OneBeer {...props}/>} /> 
     <Route exact path="/BirraRandom" render={ () => <RandomBeer/>} /> 
     <Route exact path="/NewBirra" render={ () => <NewBirra/>} /> 
     
     </Switch>

  </>
  )
}

export default App;
