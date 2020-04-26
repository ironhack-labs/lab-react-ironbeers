import React, { Component } from 'react';
import HomePage from './components/HomePage';
import ListAll from './components/ListAll'
import Random from './components/Random'
import NewBeer from './components/NewBeer'
import { BrowserRouter as Router,Route,Switch} from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/beers" component={ListAll}/>
          <Route path="/random-beer" component={Random}/>
          <Route path="/new-beer" component={NewBeer}/>
          <Route path="/" component={HomePage}/>
        </Switch>
      </Router>
    )
  }
}

export default App;
