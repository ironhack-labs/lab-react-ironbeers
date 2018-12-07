import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home'
import Header from './components/Header'
import AllBeers from './components/AllBeers'
import Beer from './components/Beer'
import { Route, Switch} from 'react-router-dom';

class App extends Component {
  
  render() {
    return (
      <div className="App">
      <Route path='/(.*)' component={Header} />
      <Switch>
      <Route exact path='/' component={Home}/>}/>
      <Route exact path='/beers' component={AllBeers}/>}/>
      <Route path='/beers/:id' component={Beer}/>}/>
      </Switch>
      </div>
    );
  }
}

export default App;
