import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';


import { Switch, Route } from 'react-router-dom'


import Home from './Beers/Home'
import BeerList from './Beers/ListBeers'
import Navigation from './UI/navbar'


function App() {

 
    return (
      <>
        <Navigation />
        <Switch>
          <Route path="/" exact render={() => <Home />} />
          <Route path="/beers" exact render={() => <BeerList />} />
        </Switch>
      </>
    );


 
}

export default App

