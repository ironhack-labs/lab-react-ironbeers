import React from 'react';

import './App.css';

import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header';
import Beers from './components/Beers';
import RandomBeer from './components/RandomBeer';
import NewBeer from './components/NewBeer';
import Beer from './components/Beer';

class App extends React.Component {
  state = {
    beers: [],
    header: false,
  };

  render() {
    return (
      <div className="App">
        <div className="container-fluid">
          <Header />

          <div className="row justify-content-md-center">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/beers" component={Beers} />
              <Route exact path="/beers/:id" component={Beer} />
              <Route exact path="/random-beer" component={RandomBeer} />
              <Route exact path="/new-beer" component={NewBeer} />
            </Switch>
          </div>
          {/* {JSON.stringify(this.state.beers)} */}
        </div>
      </div>
    );
  }
}

export default App;
