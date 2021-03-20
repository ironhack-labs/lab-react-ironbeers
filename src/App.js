import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import HomePage from './Views/HomePage';
import BeersList from './Views/BeersList';
import RandomBeer from './Views/RandomBeer';
import AddBeer from './Views/AddBeer';
import SingleBeer from './Views/SingleBeer';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/beers" component={BeersList} />
          <Route exact path="/beers/:beerID" render={(historyProps) => {
            return <SingleBeer {...historyProps} />
          }} />
          <Route exact path="/random-beer" component={RandomBeer} />
          <Route exact path="/add-beer" component={AddBeer} />
        </Switch>
      </div>
    )
  }  
}


export default App;
