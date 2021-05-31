import React from 'react';
import './App.css';
import AddBeer from './Components/AddBeer';
import AllBeers from './Components/AllBeers';
import BeerDetails from './Components/BeerDetails';
import Home from './Components/Home';
import RandomBeer from './Components/RandomBeer';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        {/* <BeerDetails /> */}

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/beers" component={AllBeers} />
          <Route exact path="/random-beer" component={RandomBeer} />
          <Route exact path="/new-beer" component={AddBeer} />
        </Switch>
      </div>
    );
  }
}

export default App;
