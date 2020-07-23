import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import AllBeers from './pages/AllBeers';
import RandomBeer from './pages/RandomBeer';
import NewBeer from './pages/NewBeer';
import BeerDetails from './pages/BeerDetails';
import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/beers" component={AllBeers} />
        <Route path="/beers/:beerId" component={BeerDetails} />
        <Route path="/random" component={RandomBeer} />
        <Route
          path="/new"
          render={(props) => {
            console.log(props, 'props in app');
            return <NewBeer {...props} />;
          }}
        />
      </Switch>
    </div>
  );
}

export default App;
