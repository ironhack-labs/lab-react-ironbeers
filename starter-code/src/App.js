import React, { Component } from 'react';
import './App.css';
import Home from './components/Home';
import { Switch, Route } from 'react-router-dom';
import ListBeers from './components/ListBeers';
import RandomBeer from './components/RandomBeer';
import SingleBeer from './components/SingleBeer';
import  NewBeer  from './components/NewBeer';


class App extends Component {
  render() {
    return (
      <div className="App">
      
      <Switch>
       <Route exact path="/" component={Home}/>
       <Route exact path="/beers" component={ListBeers}/>
       <Route exact path="/random-beer" componenst={RandomBeer}/>
       <Route exact path="/beer/:id" component={SingleBeer}/>
       <Route exact path="/new-beer" component={NewBeer}/>
      </Switch>
     
      </div>
    );
  }
}

export default App;
