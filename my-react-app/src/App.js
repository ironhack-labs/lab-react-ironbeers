import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import AllBeers from './components/pages/AllBeers';
import Beer from './components/pages/Beer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* Switch renders maximum 1 Route */}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/beers" component={AllBeers} />
          <Route exact path="/beers/:beerId" component={Beer} />
          <Route render={() => <h1>404</h1>} />
        </Switch>
      </div>
    );
  }
}

export default App;