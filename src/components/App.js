import React from 'react'
import Navigation from './navigation/'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Switch, Route } from 'react-router-dom'
import Allbeers from './beers/allBeers'
import HomeComponent from './homeComponent/homeComponent'
import './App.css'
import Details from './beers/details'
import RandomBeer from './beers/randomBeer'
import FormBeer from './beers/formBeer'




function App() {
  return (
    <>
      <Navigation />

      <Switch>
        <Route exact path="/beers/new" render={() => <FormBeer/>} ></Route>
        <Route exact path="/random" render={props => <RandomBeer {...props} />} />
        <Route exact path="/beers/:beerID" render={props => <Details {...props} />} />
        <Route exact path="/beers" render={() => <Allbeers />} />
        <HomeComponent />


      </Switch>
    </>
  );
}

export default App;
