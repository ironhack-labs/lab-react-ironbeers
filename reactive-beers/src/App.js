import React, { Component } from 'react';
import { Switch, Route } from  "react-router-dom"
import BeersList from './components/BeersList';
import Home from './components/Home';
import SingleBeer from './components/SingleBeer';
import RandomBeer from './components/RandomBeer';
import BeerForm from './components/BeerForm';
import './App.css';


class App extends Component {
  
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/beers" component={BeersList}/>
          <Route exact path="/beers/:beerId" component={SingleBeer}/>
          <Route path="/random-beer" component={RandomBeer}/>
          <Route path="/new-beer" component={BeerForm}  />
          <Route path="search?q={query}" />
        </Switch>
      </div>
    );
  }

}

export default App;
