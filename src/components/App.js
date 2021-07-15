import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './HomePage'
import { Switch, Route, Redirect } from 'react-router-dom'
// import BeerDetails from './BeerDetails'
import DisplayRandomBeer from './DisplayRandomBeer';
import DisplayBeers from './DisplayBeers';
import DisplaySpecificBeer from './DisplaySpecificBeer';
import DisplayBeer from './DisplayBeer';



function App() {

  return (

    <div className="appSpace">

      <Switch>
        <Route path="/" exact render={() => <HomePage />} />
        <Route path="/beers" render={() => <DisplayBeers />} />
        <Route path="/beer/:_id" render={(props) => <DisplayBeer {...props} />} />
        <Route path="/random-beer" render={() => <DisplayBeer />} />
        {/* <Route path="/beer/:_id" render={(props) => <DisplaySpecificBeer {...props} />} />
        <Route path="/random-beer" render={() => <DisplayRandomBeer />} /> */}
        <Route path="/new-beer" render={() => <HomePage />} />
      </Switch>

    </div>


  );
}

export default App;
