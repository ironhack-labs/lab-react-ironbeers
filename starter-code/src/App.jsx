import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import NavBar from "./components/NavBar"
import BeersView from "./views/Beers"
import HomeView from "./views/Home"
import RandomBeerView from "./views/RandomBeer"
import NewBeerView from "./views/NewBeer"


class App extends Component {
  render() {
    return (
      <div className="App">
          
      
        <Router>
        <Switch>
        <Route path="/" exact component={HomeView} />
        <Route path="/beers" component={BeersView} />
        <Route path="/new-beer" component={RandomBeerView} />
        <Route path="/random-beer" component={NewBeerView} />
        
        </Switch>
        
        </Router>
      </div>
    );
  }
}

export default App;
