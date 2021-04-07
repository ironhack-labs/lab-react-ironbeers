import React from 'react';
import { Route, Switch } from 'react-router';
import './App.css';
import BeerList from './Components/BeersList/BeerList';
import Home from './Components/Home/Home';
import NewBeer from './Components/NewBeer/NewBeer';
import RandomBeer from './Components/RandomBeer/RandomBeer';
import SingleBeer from './Components/SingleBeer/SingleBeer';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/beers" component={BeerList} />
        <Route exact path="/random-beer" component={RandomBeer} />
        <Route
          exact
          path="/beers/:beerId"
          render={(historyProps) => {
            return <SingleBeer {...historyProps} />;
          }}
        />
        <Route exact path="/new-beer" component={NewBeer} />
      </Switch>
    </div>
  );
}

export default App;
