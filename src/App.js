import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './HomePage'
import { Switch, Route, Redirect } from 'react-router-dom'
import BeerDetails from './BeerDetails';


function App() {
  return (

    <div className="appSpace">
      <Switch>
        <Route path="/" exact render={() => <HomePage />} />
        <Route path="/beers" render={() => <HomePage />} />
        <Route path="/random-beer" render={() => <BeerDetails />} />
        <Route path="/new-beer" render={() => <HomePage />} />
      </Switch>
      {/* <HomePage className="homePage" /> */}
    </div>


  );
}

export default App;
