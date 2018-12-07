import React, { Component } from 'react';
import './App.css';
import AllBeers from "./components/AllBeers/Allbeers"
import NewBrewski from "./components/NewBrewski/NewBrewski"
import RandomBrewski from "./components/RandomBrewski/RandomBrewski.js"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import SingleBrewski from "./components/SingleBrewski/SingleBrewski"
import Navbar from "./components/NavBar/NavBar"



class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
      <Navbar />
      <Switch>

        <Route exact path="/beers" component={AllBeers} />
        <Route exact path="/singlebeer/:id" component={SingleBrewski}/>
        <Route exact path="/random-beer" component={RandomBrewski} />
        <Route exact path="/new-brew" component={NewBrewski} />
      </Switch>
      </div>  
      </Router>
    );
  }
}

export default App;
