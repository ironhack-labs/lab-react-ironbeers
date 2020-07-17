import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

import Home from './home/'
import List from './beers/BeersList'
import Detail from './beers/BeerDetails'
import New from './beers/NewBeer'




import { Switch, Route } from 'react-router-dom'

function App() {
  return (
    <>


      <Switch>
        <Route exact path="/new" render={props => <New {...props} />} />
        <Route exact path="/" render={() => <Home />} />
        <Route path="/beers" render={() => <List />} />
        <Route exact path="/:id" render={props => <Detail {...props} />} />
        



      </Switch>
    </>
  );
}

export default App;
