import React from 'react';
import logo from './logo.svg';

import { Switch, Route} from "react-router-dom";

import Home from './components/Home'
import ListBeers from './components/ListBeers'
import RandomBeer from './components/RandomBeer';
import NewBeer from './components/NewBeer';
import SingleBeers from './components/SingleBeer'

import './App.css';


class App extends React.Component {



 render(){
  return(
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/beers" component={ListBeers}/>
        <Route exact path="/beers/:id" component={SingleBeers}/>
        <Route exact path="/random-beer" component={RandomBeer}/>
        <Route exact path="/new-beer" component={NewBeer}/>

      </Switch>
    </div>
  )
}
}

export default App;
