import React, { Component } from 'react';
import './App.css';
import { Home } from "./pages/home";
import ListBeers from "./pages/listBeers";
import RandomBeer from "./pages/randomBeer";
import { NewBeer } from "./pages/newBeer";
import BeerDetail from "./pages/beerDetail";
import { Switch, Route } from 'react-router';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Switch>
            <Route exact strict path="/" component={Home}/>
            <Route path="/beers" component={ListBeers} />
            <Route path="/random-beer" component={RandomBeer} />
            <Route path="/new-beer" component={NewBeer} />
            <Route path="/beer/:id" component={BeerDetail} />
          </Switch>
        </header>
      </div>
    );
  }
}

export default App;