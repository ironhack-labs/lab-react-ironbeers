import React, { Component } from 'react';
import AllBeers from "./Components/AllBeers"
import NewBeer from "./Components/NewBeer"
import RandomBeer from "./Components/RandomBeer"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Links from "./Components/Links"
import SingleBeer from "./Components/SingleBeer"
import Navbar from "./Components/Navbar"

class App extends Component {
  render() {
    return (
      <Router>  
      <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Links}/>
            <Route exact path="/single/:id" component={SingleBeer}/>
            <Route exact path="/beers" component={AllBeers} />
            <Route exact path="/new-beer" component={NewBeer} />
            <Route exact path="/random-beer" component={RandomBeer} />
          </ Switch >
        </div>
      </Router>
    );
  }
}

export default App;
