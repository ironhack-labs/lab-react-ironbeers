import React, { useEffect } from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from './components/Navbar/Navbar';
import HomePage from './pages/HomePage/HomePage';
import AllBeers from './pages/AllBeers/Allbeers';
import SingleBeer from './pages/SingleBeer/SingleBeer';
import RandomBeer from './pages/RandomBeer/RandomBeer';
import { Link, Route, Switch } from 'react-router-dom';
import axios from 'axios';

function App() {
  const initialState = {
    getData: false,
    data: [],
  };
  const [beersList, setBeersList] = React.useState(initialState);

  const getData = () => {
    axios.get('https://ih-beers-api2.herokuapp.com/beers').then((res) => {
      setBeersList({
        data: res.data,
        getData: true,
      });
    });
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <main>
      <Navbar />
      <Switch>
        <Route path="/All Beers">
          <AllBeers beersList={beersList} />
        </Route>
        <Route path="/Random Beer">
          <RandomBeer />
        </Route>
        <Route path="/:beerId">
          <SingleBeer beersList={beersList} />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </main>
  );
}

export default App;
