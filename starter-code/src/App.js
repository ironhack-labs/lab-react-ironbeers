import React, { Component } from 'react';
import './App.css';
import HomePage from './views/HomePage'
import { Route, Switch } from "react-router-dom";
import AllBeers from './views/AllBeers';
import RandomBeers from './views/RandomBeers';
import Newbeer from './views/NewBeer';
import beersService from './services/beers-service';

class App extends Component {
  state = {
    beers: [],
  }

  componentDidMount = () => {
    beersService.getAllBeers()
      .then(response => {
        this.setState({
          beers: response.data,
        })
      })
      .catch(error => {
        console.log(error)
      })
  }


  render() {
    const { beers } = this.state;
    return (
      <div>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/beers' render={() => <AllBeers beers={beers} />} />
          <Route path='/random-beer' component={RandomBeers} />
          <Route path='/new-beer' component={Newbeer} />
        </Switch>
      </div>
    );
  }
}

export default App;
