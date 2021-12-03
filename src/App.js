import React from 'react';
import HomePage from './components/HomePage';
import Header from './components/Header';
import { Switch, Route, Redirect } from 'react-router-dom'
import BeersList from './components/BeersList';

function App() {
  return (
    <div>
      <Header />
      <HomePage />
      <Switch>
        {/* <Route path="/" exact render={() => <Home />} /> */}
        <Route path="/beers/:beerId" render={() => <BeersList />} />

      </Switch>
    </div>
  );
}

export default App;
