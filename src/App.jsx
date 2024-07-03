import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AllBeersPage from './pages/AllBeersPage';
import BeerDetailsPage from './pages/BeerDetailsPage';
import AddBeerPage from './pages/AddBeerPage';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={AllBeersPage} />
        <Route path="/beers/:beerId" component={BeerDetailsPage} />
        <Route path="/new-beer" component={AddBeerPage} />
      </Switch>
    </Router>
  );
};

export default App;