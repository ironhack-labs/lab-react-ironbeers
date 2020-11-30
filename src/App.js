import React from 'react';
import './App.css';
import {Switch, Route} from "react-router-dom"
import Homepage from "./Homepage/Homepage"
import Header from "./Header/Header"
import Beers from "./Beers/Beers"
import BeersDetails from "./BeersDetails/BeersDetails"
import RandomBeer from "./RandomBeer/RandomBeer"
import NewBeer from "./NewBeer/NewBeer"

function App() {
  return (
    <div className="App">  
    {!Homepage ? <Header />: null}
    <Switch>
      <Route exact path="/" component={Homepage} />
      <Route exact path="/beers" component={Beers} />
      <Route path="/beers/:id" component={BeersDetails} /> 
      <Route path="/random-beer" component={RandomBeer} />
      <Route path="/new-beer" component={NewBeer} />
    </Switch>
  </div>


  );
}

export default App;
