import React, { Component } from 'react';
import './App.css';
import Homepage from "./components/Homepage"
import BeersList from "./components/pages/BeersList"
import SingleBeer from "./components/pages/SingleBeer"
import {Route} from "react-router-dom";
import 'bulma/css/bulma.css';

class App extends Component {
  
  render() {
    return (
      <div className="App">
          <Route exact path="/" component={Homepage}></Route>
          <Route exact path="/beers" component={BeersList}></Route>
          <Route exact path="/beers/:beerId" component={SingleBeer}></Route>

      </div>
    );
  }
}

export default App;

//npm install axios react-router-dom query string bulma font-awesome bulma-helpers node-sass--s