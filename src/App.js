import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { Switch, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import BeersList from './Pages/BeersList';
import SingleBeer from './Pages/SingleBeer';
import { useState, useEffect } from 'react';
import axios from 'axios';
import RandomBeer from './Pages/RandomBeer';
import NewBeer from './Pages/NewBeer';

function App() {
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    axios.get('https://ih-beers-api2.herokuapp.com/beers').then((response) => {
      setBeers(response.data);
    });
  }, []);

  return (
    <div className="App">
      <Navbar />
      <div class="container">
        <div class="row">
          <div class="col-12">
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route exact path="/beers" component={BeersList} />
              <Route
                path="/singlebeer/:id"
                render={(props) => <SingleBeer {...props} beers={beers} />}
              />
              <Route exact path="/random-beer" component={RandomBeer} />
              <Route exact path="/new-beer" component={NewBeer} />
            </Switch>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
