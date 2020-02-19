import React, { Component } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import './App.css';

import Homepage from './components/pages/Homepage';
import Beers from './components/pages/Beers';
import RandomBeer from './components/pages/RandomBeer';
import NewBeer from './components/pages/NewBeer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Homepage}/>
            <Route exact path="/beers" component={Beers}/>
            <Route exact path="/random-beer" component={RandomBeer}/>
            <Route exact path="/new-beer" component={NewBeer}/>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
