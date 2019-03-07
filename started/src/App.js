import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { BrowserRouter as Switch, Router, Route, Link } from "react-router-dom";
import Home from './components/Home';

class App extends Component {

  constructor(){
    super()
    this.state = {
        allBeers: []
    }
}

  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path='/' component={Home}/>
          {/* <Route path='/beers' component={Beers}/> */}
          
        </Switch>
      </div>
    );
  }
}

export default App;
