import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Section from './components/section/Section';
import BeerList from './components/beerlist/BeerList';
import BeerDetails from './components/beerdetails/BeerDetails';

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Section} />
      <Route exact path="/beers" component={BeerList} />
      <Route exact path="/beers/:id" component={BeerDetails} />
    </BrowserRouter>
  );
}

export default App;
