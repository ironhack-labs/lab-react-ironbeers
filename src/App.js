import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router';
import './App.css';
import AllBeers from './components/AllBeers/AllBeers';
import RandomBeer from './components/RandomBeer/RandomBeer';
import NewBeer from './components/NewBeer/NewBeer';
import Home from './components/Home/Home';

function App() {
  // const [beers, setBeers] = useState([]);
  // const [loaded, setLoaded] = useState(false);

  // useEffect(() => {

  //   setBeers(beersFromApi);
  //   setLoaded(true);
  // }, []);

  return (
    <div className="App">
      {/* <div className="container"> */}
      <Switch>
        <Route exact path="/" render={() => <Home />} />
        <Route exact path="/AllBeers" render={() => <AllBeers />} />
        <Route exact path="/RandomBeer" render={() => <RandomBeer />} />
        <Route exact path="/NewBeer" render={() => <NewBeer />} />
      </Switch>
      {/* </div> */}
    </div>
  );
}

export default App;
