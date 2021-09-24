import React from 'react';
import './App.css';
import Navbar from './components/navbar';
import {Switch, Route} from "react-router-dom"
import Beers from './components/beers';
import SelectedBeer from './components/selectedBeer';
import RandomBeer from './components/randomBeer copy';
import NewBeer from "./components/newBeer"

function App() {
  return (
    <div className="App">
      <Navbar />


      <Switch>

        <Route exact path="/beers" component={Beers}/>

        <Route exact path="/random-beer" component={RandomBeer}/>

        <Route exact path="/random-beer/:id" component={SelectedBeer} />

        <Route exact path="/new-beer" component={NewBeer} />

      </Switch>


    </div>
  );
}

export default App;
