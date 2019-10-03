import React, { Component } from 'react';
import NavBar from './NavBar'
import Home from './Home'
import AllBeers from './AllBeers'
import NewBeer from './NewBeer'
import RandomBeer from './RandomBeers'
import SingleBeer from './SingleBeer'
import { Switch, Route } from 'react-router-dom'
import './App.css';



class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path = "/" component={Home}/>
          <Route exact path = "/all-beers" component={AllBeers}/>
          <Route exact path = "/random-beer" component={RandomBeer}/>
          <Route exact path = "/new-beer" component={NewBeer}/>
          <Route exact path="/beer/:id" component={SingleBeer} />
        </Switch>
      </div>
    );
  }
}

export default App;
