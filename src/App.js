import React from 'react';
import { Route, Switch } from "react-router-dom";
import { Link } from 'react-router-dom';
import Home from './Components/Home'
import BeersList from './Components/BeersList'
import SingleBeer from './Components/SingleBeer'
import NewBeer from './Components/NewBeer'
import './App.css';

// make sure set up import route and <Router> tags in index.js
// in the <Route exact path="xxx"> name freely the path that your component={xxx} shall display
function App() {
  return (
    <div className="App">
      <Link
         key=""
         to="/"
      >
      ironBeer Home
      </Link>

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/beers" component={BeersList} />
          <Route exact path="/beers/:id" component={SingleBeer} />
          <Route exact path="/new-beer" component={NewBeer} />
          
        </Switch> 
    </div>
  )
};

export default App;
