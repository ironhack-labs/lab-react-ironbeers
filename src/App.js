import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Homepage from './components/pages/Homepage/Homepage';
import Navigation from './components/layout/Navigation/Navigation';
import BeersPage from './components/pages/AllBeers/BeersPage';
import BeerDetails from './components/pages/BeerDetails/BeerDetails';
import './App.css';

function App() {
  return (
    <div className="App">
    <Navigation />
     <Switch> 
     <Route exact path="/" render={() => <Homepage />} />
     <Route exact path="/all-beers" render={() => <BeersPage />} />
     <Route path="/:_id" render={(props) => <BeerDetails {...props} />} />
     </Switch>
    </div>
  );
}

export default App;
