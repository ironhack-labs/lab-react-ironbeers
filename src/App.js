import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
//import {Link, Route} from 'react-router-dom'
import Homepage from './components/Homepage'
import AllBeers from './components/AllBeers'
import RandomBeer from './components/RandomBeer'
import NewBeer from './components/NewBeer'
import BeerDetails from './components/BeerDetails'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <> 
          <Homepage
          />
          <Route exact path="/beers" 
            component={AllBeers}
          />
          <Route exact path="/random-beer" 
            component={RandomBeer}
          />
          <Route exact path="/new-beer" 
            component={NewBeer}
          />
          <Route exact path='/beers/:beerId' 
            component={BeerDetails} 
          />
        </>
      </header>
    </div>
  );
}

export default App;
