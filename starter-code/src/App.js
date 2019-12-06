import React, { Component } from 'react'
import './App.css';
import AllBeers from "./components/AllBeers"
import { Switch, Route } from 'react-router-dom'
import RandomBeer from './components/RandomBeer'
import NewBeer from "./components/NewBeer"
import HomePage from "./components/HomePage"
import OneBeer from './components/OneBeer'
// import NavBar from './components/NavBar';



class App extends Component {
  render() {
    return (
      <>
        <nav className="navbar navbar-light bg-light">
          <a className="navbar-brand" href="/">ULTRA AMAZING NAVBAR... y lo sabes(volver a home)</a>
        </nav>

        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/AllBeers" component={AllBeers} />
          <Route exact path="/RandomBeer" component={RandomBeer} />
          <Route exact path="/NewBeer" component={NewBeer} />
          <Route exact path="/OneBeer/:id" component={OneBeer} />
        </Switch>
      </>
    );
  }
}

export default App;
