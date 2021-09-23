import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch, Route } from 'react-router-dom';
import HomePage from './components/pages/HomePage/HomePage';
import Header from './components/Layout/Header.js/Header';
import BeersPage from './components/pages/BeersPage/BeersPage';
import RandomBeersPage from './components/pages/RandomBeersPage/RandomBeersPage'
import BeerDetailsPage from './components/pages/BeerDetailsPage/BeerDetailsPage';
import NewBeerForm from './components/pages/NewBeer/NewBeerForm';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" render={() => <HomePage />} />
        <Route exact path="/beers" render={() => <BeersPage />} />
        <Route exact path="/random" render={() => <RandomBeersPage />} />
        <Route path="/beer/:id" render={(props) => <BeerDetailsPage {...props}/>} />
        <Route exact path="/new-beer" render={() => <NewBeerForm />} />
      </Switch>
    </div>
  );
}

export default App;

