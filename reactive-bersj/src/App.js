import React, { Component } from 'react';
import './App.css';
import {Home} from './components/Home'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Beers from './components/Beers'
// import newBeer from './components/newBeer'
// import randomBeer from './components/randomBeer'
import SingleBeerPage from './components/SingleBeerPage';

import 'bulma/css/bulma.css';


class App extends Component {
  render() {
  
    // if (! path=='/'){
    return (
      <Router>  
      <div className="App">
          <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/beers' component={Beers}/>
          {/* <Route exact path='/randombeer' component={randomBeer}/>
          <Route exact path='/newbeer' component={newBeer}/> */}
          <Route exact path='/beers/:id' component={SingleBeerPage}/>
          </ Switch >
        </div>
      </Router>
     )
}
}

export default App;
