import React from 'react';
import Home from './components/Home/Home';
import Beers from './components/Beers';
import { Switch, Route } from 'react-router-dom';
import SingleBeer from './components/SingleBeer';
import './App.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import RandomBeer from './components/RandomBeer';
import NewBeer from './components/NewBeer';

function App() {
  const [beers, setBeers] = useState();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const callApi = async () => {
      const beersFromApi = await axios.get(
        'https://ih-beers-api2.herokuapp.com/beers'
      );
      setBeers(beersFromApi.data);
      setLoaded(true);
    };
    callApi();
  }, []);

  return (
    loaded && (
      <div className="App">
        <Switch>
          <Route exact path="/" render={() => <Home />} />
          <Route exact path="/beers" render={() => <Beers beers={beers} />} />
          <Route
            exact
            path="/beers/:id"
            render={() => <SingleBeer beers={beers} />}
          />
          <Route exact path="/random-beer" render={() => <RandomBeer />} />
          <Route exact path="/new-beer" render={() => <NewBeer />} />
        </Switch>
      </div>
    )
  );
}

export default App;
