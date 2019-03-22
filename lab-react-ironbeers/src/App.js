import React, { Component } from 'react';
import './App.css';
import Home from './components/Home'
import Beers from './components/Beers'
import { Switch, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
        <div className="App">
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route exact path='/beers' component={Beers}/>
                <Route path='/beers' component={Beers}/>
            </Switch>
        </div>
    );
  }
}

export default App;
