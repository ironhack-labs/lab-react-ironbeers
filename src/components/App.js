import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'

import Home from './misc/Home'
import BeersList from './BeersList'
import NotFound from './misc/NotFound'
import RandomBeer from './RandomBeer';
import DetailsBeer from './DetailsBeer';

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path='/home' component={Home} />
          <Route exact path='/beers' component={BeersList} />
          <Route exact path='/beers/:id' component={DetailsBeer} />
          <Route exact path='/random-beer' component={RandomBeer} />
          <Route exact path="/" component={() => (
            <Redirect to="/home" />
          )} />

          <Route path="/" component={NotFound} />
        </Switch>
      </div>
    );
  }
}

export default App;