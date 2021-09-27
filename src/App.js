import React from 'react';

import './App.css';
import { Switch, Route } from 'react-router-dom';
import AllBeers from './components/Pages/AllBeers';
import { useState, useEffect } from 'react';
import Home from './components/Pages/Home';
import axios from 'axios';
import RandomBeer from './components/Pages/RandomBeer';
import DetailBeer from './components/UI/DetailBeer';
import NewBeer from './components/Pages/NewBeer';

function App() {
  const [beerArray, setBeerArray] = useState([]);
  const [detailedBeer, setDetailedBeer] = useState({});
  useEffect(() => {
    axios
      .get('https://ih-beers-api2.herokuapp.com/beers')
      .then((res) => setBeerArray(res.data));
  }, []);
  const liftBeerUp = (beer) => {
    console.log('beer lifted up', beer);
    setDetailedBeer(() => beer);
  };
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route
          path="/listOfBeers/"
          component={() => (
            <AllBeers onDetailClick={liftBeerUp} beerData={beerArray} />
          )}
        />
        <Route
          path="/randomBeer/"
          component={() => <RandomBeer beerData={beerArray} />}
        />
        <Route
          path="/beerDetails/:id"
          exact
          component={() => (
            <DetailBeer backlink="listOfBeers/" beerObj={detailedBeer} />
          )}
        ></Route>
        <Route path="/newBeer" exact component={NewBeer}></Route>
      </Switch>
    </div>
  );
}

export default App;
