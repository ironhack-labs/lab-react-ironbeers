import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Beers from './components/Beers';
import RandomBeer from './components/RandomBeer';
import NewBeer from './components/NewBeer';
import ListBeers from './components/ListBeers';
import DetailsBeer from './components/DetailsBeer';


class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Carmen</h1>
        <Switch>
          <Route exact path="/beers" component={ListBeers} />
          <Route exact path='/beers/single/:id' component={DetailsBeer}/>
          {/* <Route exact path="/random-beer" component="{ProjectList2}" />
          <Route exact path="/new-beer" component="{ProjectList}" /> */}
        </Switch>
        <RandomBeer />
        <Beers />
        <NewBeer /> 
       
      </div>
    );
  }
}
export default App;