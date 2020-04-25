import React, { Component } from 'react';
import './App.css';
import { Route } from "react-router-dom";
import HomePage from './components/HomePage'
import BeerList from './components/BeerList';
import Beer from './components/Beer';
import NewBeer from './components/NewBeer';

class App extends Component {

  renderOneBeerId = (renderProps) =>  <Beer id={renderProps.match.params.id}/>
  renderOneBeerRandom = () => <Beer id={'random'}/>

  render() {
    return (
      <div>
        <Route exact path="/" component={ HomePage }/>
        <Route exact path="/beers" component={ BeerList }/>
        <Route exact path="/beers/:id" render={ this.renderOneBeerId }/>
        <Route exact path="/random-beer" render={ this.renderOneBeerRandom }/>
        <Route exact path="/new-beer" component={ NewBeer }/>
      </div>
    );
  }
}

export default App;
