import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Homepage from './components/Homepage';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AllBeersPage from './components/AllBeersPage';
import RandomBeerPage from './components/RandomBeerPage';
import NewBeerPage from './components/NewBeerPage';
import BeerDetailsPage from './components/BeerDetailsPage';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/beers" component={AllBeersPage} />
        <Route
          path="/beers/:beerId"
          render={(props) => <BeerDetailsPage {...props} />}
        />
        <Route path="/random-beer" component={RandomBeerPage} />
        <Route path="/new-beer" component={NewBeerPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
