import React, { Component } from 'react';
import './App.css';
import Homepage from "./components/Homepage"
import BeersList from "./components/pages/BeersList"
import SingleBeer from "./components/pages/SingleBeer"
import NewBeer from "./components/pages/NewBeer"
import {Route} from "react-router-dom";
import 'bulma/css/bulma.css';

class App extends Component {
  
  render() {
    return (
      <div className="App">
          <Route exact path="/" component={Homepage}></Route>
          <Route exact path="/beers" component={BeersList}></Route>
          <Route exact path="/beers/new" component={NewBeer}></Route>
          <Route exact path="/beers/detail/:beerId" component={SingleBeer}></Route>
      </div>
    );
  }
}

export default App;

//npm install axios react-router-dom query string bulma font-awesome bulma-helpers node-sass qs dotenv --s