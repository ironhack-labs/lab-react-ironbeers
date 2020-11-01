import React, { useEffect, useState, useCallback } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import axios from 'axios';
import 'semantic-ui-css/semantic.min.css';
import './App.css';
import Navbar from './components/Navbar';
import Landing from './components/Landing';
import ListBeers from './components/ListBeers';
import NewBeer from './components/NewBeer';
import RandomBeer from './components/RandomBeer';
import SingleBeer from './components/SingleBeer';

function App(props) {
  const [beers, setBeers] = useState([]);
  const [clonedBeers, setClonedBeers] = useState([]);

  useEffect(() => {
    axios.get('https://ih-beers-api2.herokuapp.com/beers').then((response) => {
      setBeers(response.data);
      setClonedBeers(response.data);
    });
  }, []);

  const handleAdd = useCallback((e) => {
    const {
      name,
      tagline,
      description,
      first_brewed,
      brewers_tips,
      attenuation_level,
      contributed_by,
    } = e.target;

    let newBeer = {
      name: name.value,
      tagline: tagline.value,
      description: description.value,
      first_brewed: first_brewed.value,
      brewers_tips: brewers_tips.value,
      attenuation_level: attenuation_level.value,
      contributed_by: contributed_by.value,
    };

    axios
      .post('https://ih-beers-api2.herokuapp.com/beers/new', newBeer)
      .then((response) => {
        setBeers([response.data, ...beers], props.history.push('/'));
      });
  }, []);

  const handleSearch = useCallback((e) => {
    let searchInput = e.target.value.toLowerCase();
    let filteredBeers = beers.filter((beer) => {
      return beer.name.toLowerCase().startsWith(searchInput);
    });
    setClonedBeers(filteredBeers);
  });

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    let useInput = e.target.keyWord.value.toLowerCase();
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/search?q=${useInput}`)
      .then((response) => {
        setClonedBeers(response.data);
      });
  });

  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route
          exact
          path="/"
          render={() => {
            return <Landing />;
          }}
        ></Route>
        <Route
          exact
          path="/beers"
          render={() => {
            return (
              <ListBeers
                beers={clonedBeers}
                onSearch={handleSearch}
                onSubmit={handleSubmit}
              />
            );
          }}
        ></Route>
        <Route
          exact
          path="/beers/:beerId"
          render={(routerProps) => {
            return <SingleBeer routerProps={routerProps} />;
          }}
        ></Route>
        <Route
          path="/random-beer"
          render={() => {
            return <RandomBeer />;
          }}
        ></Route>
        <Route
          path="/new-beer"
          render={() => {
            return <NewBeer onAdd={handleAdd} />;
          }}
        ></Route>
      </Switch>
    </div>
  );
}

export default withRouter(App);
