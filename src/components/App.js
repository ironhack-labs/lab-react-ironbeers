import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './HomePage'
import { Switch, Route, Redirect } from 'react-router-dom'
// import BeerDetails from './BeerDetails'
import DisplayRandomBeer from './DisplayRandomBeer';
import DisplayBeers from './DisplayBeers';



function App() {
  return (

    <div className="appSpace">

      <Switch>
        <Route path="/" exact render={() => <HomePage />} />
        <Route path="/beers" render={() => <DisplayBeers />} />
        <Route path="/random-beer" render={() => <DisplayRandomBeer />} />
        <Route path="/new-beer" render={() => <HomePage />} />
      </Switch>

    </div>


  );
}

export default App;
