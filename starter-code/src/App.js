import React, { Component } from 'react';
import './App.css';

import {Switch, Route} from 'react-router-dom'

/*CUSTOM COMPONENTS*/
import BeersList from "./components/BeersList"
import BeersCard  from "./components/BeersDetails"
import BeersDetails from './components/BeersDetails'

class App extends Component {
  render() {
    return (
      <>
        <Switch>
          <Route exact path="/" component={BeersList} />
          <Route exact path="/Beers/:id" component={BeersDetails} />
        </Switch>
        
          </>
    );
  }
}

export default App;
