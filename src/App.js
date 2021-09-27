import React from 'react';
import './App.css';
import { Switch, Route, Link} from "react-router-dom";
import HomePage from './pages/HomePage'
import Beers from './pages/Beers';
import NewBeers from './pages/NewBeer';
import RandomBeers from './pages/RandomBeer';
import BeerDetails from './pages/BeerDetails';


function App() {
  return (
    <div className="App">
      <Switch>
           <Route path="/beers/:id" component={BeerDetails}/>          
           <Route exact path="/new-beer" component={NewBeers} />
           <Route exact path="/random-beer" component={RandomBeers} />
           <Route exact path="/beers" component={Beers} />
           <Route exact path="/" component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
