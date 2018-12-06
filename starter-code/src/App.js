import React, { Component } from 'react';
import './App.css';
import { Link, Switch, Route } from "react-router-dom";
import Home from './components/Home/Home.jsx';
import Beers from './components/Beers/Beers.jsx';
import RandomBeer from './components/RandomBeer/RandomBeer.jsx';
import NewBeer from './components/NewBeer/NewBeer.jsx';
import NavBar from './components/NavBar/NavBar';


class App extends Component {
  render() {
    return (
      <div className="App">
     










<Switch>
  <Route exact path='/' component={Home}/>
  <Route exact path='/beers' component={Beers}/>
  <Route exact path='/random-beers' component={RandomBeer}/>
  <Route exact path='/new-beer' component={NewBeer}/>

</Switch>
        
      </div>
    );
  }
}

export default App;
