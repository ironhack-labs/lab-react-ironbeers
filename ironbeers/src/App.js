import React from 'react';
import './App.css';
import {Route, Switch} from "react-router-dom"
import Homepage from "./components/Homepage"

import AllBeers from "./components/AllBeers"
import RandomBeers from "./components/RandomBeers"
import AddNewBeer from "./components/AddNewBeer"
import BeerDetailPage from './components/BeerDetailPage';


const App = () =>  {

    return (
      
      <Switch>
      <Route   exact path="/" component={Homepage}> </Route>
      <Route   exact path="/beers" component={AllBeers}></Route>
      <Route   path="/random-beer" component={RandomBeers}></Route>
      <Route   path="/new-beer" component={AddNewBeer}></Route>
      <Route   path="/beers/:beerId" component={BeerDetailPage}></Route>
      </Switch>

    )

}

export default App;
