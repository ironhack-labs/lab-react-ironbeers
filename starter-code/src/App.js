import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import AllBeers from './pages/AllBeers.jsx';
import RandomBeer from './pages/RandomBeer.jsx';
import NewBeer from './pages/NewBeer.jsx';
// import SingleBeer from './pages/SingleBeer.jsx';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/beers" component={AllBeers} />
            {/* <Route path="/beers/:_id" component={SingleBeer}/> */}
            <Route path="/random-beer" component={RandomBeer} />
            <Route path="/new-beer" component={NewBeer} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
