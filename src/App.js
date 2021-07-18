import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';

import './App.css';
import Beer from './components/Beer';
import Home from './components/Home';
import NewBeer from './components/NewBeer';
import RandomBeer from './components/RandomBeer';
import BeerDetails from './components/BeerDetails';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path={'/'} component={Home} />
        <Route exact path={'/beer'} component={Beer} />
        <Route path={'/random-beer'} component={RandomBeer} />
        <Route path={'/new-beer'} component={NewBeer} />
        <Route path={'/beer/:id'} component={BeerDetails} />
        {/* <Route
          path={`/beer/:id`}
          render={() => {
            return <BeerDetails />;
          }}
        /> */}
      </Switch>
    </div>
  );
}

export default withRouter(App);
