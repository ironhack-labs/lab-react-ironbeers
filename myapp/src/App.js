import React, { Component } from 'react';
import './App.css';
import HomePage from './views/HomePage';
import { Route } from 'react-router-dom';
import BeerList from './views/BeerList';
import SingleBeer from './views/SingleBeer';
import NewBeerForm from './views/NewBeerForm';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" render={() => <HomePage></HomePage>}></Route>
        <Route exact path="/beers" render={() => <BeerList></BeerList>}></Route>
        <Route path="/beers/:id" component={SingleBeer}></Route>
        <Route path="/random-beer" render={() => <SingleBeer random={true}></SingleBeer>}></Route>
        <Route path="/new-beer" component={NewBeerForm}></Route>
      </div>
    );
  }
}

export default App;
