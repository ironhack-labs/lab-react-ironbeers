import React from "react";
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import beers from './assets/beers.png';
import newBeer from './assets/new-beer.png';
import randomBeer from './assets/random-beer.png';

import Card from './components/Card';

function App() {
  return (
    <BrowserRouter>    
      <div className="container pt-2">
        <Card image={beers} name='All Beers'/>
        <Card image={randomBeer} name='Random Beer'/>
        <Card image={newBeer} name='New Beer'/>
      </div>
    </BrowserRouter>
  );
}

export default App;
