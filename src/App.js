import React from 'react';
import './App.css';

import { Route, Link, Switch } from 'react-router-dom';

// Pages
import Homepage from './pages/Homepage';
import Listbeers from './pages/Listbeers';
import Randombeer from './pages/Randombeer';
import Newbeer from './pages/Newbeer';
import NotFoundPage from './pages/Notfound';
import Dynamicbeers from './pages/Dynamicbeers';

// Import API?????
// const beerApi = 'https://ih-beers-api2.herokuapp.com/beers';
//import axios from 'axios';

function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/beers">See all beers</Link>
      <Link to="/randombeer">Randomize beer</Link>
      <Link to="/newbeer">Add a new beer</Link>
    </nav>
  );
}

// Define routes
function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/beers" component={Listbeers} />
        <Route exact path="/randombeer" component={Randombeer} />
        <Route exact path="/newbeer" component={Newbeer} />
        <Route path="/beers/:beerId" component={Dynamicbeers} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  );
}

export default App;
