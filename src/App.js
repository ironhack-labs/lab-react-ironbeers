import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Switch, Route } from 'react-router-dom'
import HomePage from './components/pages/HomePage/HomePage';
import Header from './components/layout/Header/Header';
import BeersPage from './components/pages/BeersPage/BeersPage';
import BeerDetails from './components/pages/BeerDetails/BeerDetails';
import RandomBeerPage from './components/pages/RandomBeerPage/RandomBeerPage';


function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" render={() => <HomePage />} />
        <Route exact path="/beers" render={() => <BeersPage><Header /></BeersPage>} />
        <Route path="/beers/:id" render={(props) => <BeerDetails {...props}><Header /></BeerDetails>} />
        <Route exact path="/random-beer" render={() => <RandomBeerPage><Header /></RandomBeerPage>} />
      </Switch>
    </div>
  );
}


export default App;
