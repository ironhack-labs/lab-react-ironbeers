import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

import BeerApi from './components/services/BeerApi'
import Home from './components/Home';
import AllBeers from './components/AllBeers';
import SingleBeer from './components/SingleBeer';
import NewBeer from './components/NewBeer';
import RandomBeer from './components/RandomBeer';

import './App.css';


export default class App extends Component {
  constructor() {
    super()


    this.state = {
      beers: []
    }

    this.service = new BeerApi()
  }
  componentDidMount() {
    this.service.getAllBeers().then((beers) => {
      this.setState({
        beers: beers.data
      });
    });


  }

  render() {
    return (
      <div className="App container">
      
        <Switch>
          <Route path="/" exact render={() => <Home />} />
          <Route path="/beers" render={() => <AllBeers beers={this.state.beers} />} />
          <Route path="/:id" render={(props) => <SingleBeer {...props} />} />
          <Route path="/random-beer" render={() => <RandomBeer />} />
          <Route path="/new-beer" render={() => <NewBeer />} />
        </Switch>
      </div>
    )
  }
}
