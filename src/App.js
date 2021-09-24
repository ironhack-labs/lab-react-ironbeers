import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import "./App.css";
import BeersList from './components/BeersList';
import Home from './components/Home';
import axios from 'axios';

function App() {
  const [beers, setBeers] = useState([])

  useEffect(() => {
    axios.get('https://ih-beers-api2.herokuapp.com/beers')
      .then(response => {
        setBeers(response.data);
      })
      .catch(err => console.log(err));
  }, [])

  return (
    <div className="App">
    <h1>LOOK AT BEEEEERS</h1>
    <Switch>
    <Route exact path='/' component={Home} />
    <Route
          exact path="/beers"
          render={(props) => {
            return <BeersList beers={beers} {...props} />;
          }}
        />
    </Switch>
    </div>
    )
  }

  export default App;
  