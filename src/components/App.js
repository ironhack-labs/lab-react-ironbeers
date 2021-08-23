import axios from 'axios';
import { Switch, Route } from 'react-router-dom';

import Homepage from './Homepage';
import ListBeers from './ListBeers';
import SingleBeer from './SingleBeer';
import RandomBeer from './RandomBeer';

import React from 'react';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Homepage} />

          <Route path="/list" exact>
            <ListBeers />
          </Route>
        </Switch>
        {/* <ListBeers />
        <SingleBeer />
        <RandomBeer /> */}
      </div>
    );
  }
}

export default App;
