import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React from 'react';
import logo from './logo.svg';
import { Route, Switch } from 'react-router';
import HomePage from './components/pages/HomePage/HomePage';
import ListBeers from './components/pages/BeersPage/ListBeers';
import BeerDetails from './components/pages/BeersPage/BeerDetails.';





function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" render={() => <HomePage />} />
        <Route exact path="/beers" render={()=><ListBeers/>}/>
        <Route path="/:id" render={(props)=><BeerDetails {...props}/>}/>
      </Switch>
    </>
  );
}

export default App;
