import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router';
import axios from "axios";
import './App.css';

// Modules
import AllBeers from './components/AllBeers/AllBeers';
import Beer from './components/Beer/Beer';
import RandomBeer from './components/RandomBeer/RandomBeer';
import NewBeer from './components/NewBeer/NewBeer';
import Home from './components/Home/Home';

function App() {
  const [beers, setBeers] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const beersFromApi = await axios(
        "https://ih-beers-api2.herokuapp.com/beers"
      );
      console.log(beersFromApi.data)
      setBeers(beersFromApi.data);
      setLoaded(true);
    };
    fetchData()
  }, []);

  return (
    loaded && (<div className="App">
      {/* <div className="container"> */}
      <Switch>
        <Route exact path="/" render={() => <Home />} />
        <Route exact path="/beers" render={() => <AllBeers beers={beers}/>} />
        <Route exact path="/beers/:id" render={() => <Beer beers={beers}/>} />
        <Route exact path="/random-beer" render={() => <RandomBeer />} />
        <Route exact path="/new-beer" render={() => <NewBeer />} />
      </Switch>
      {/* </div> */}
    </div>)
  );
}

export default App;
