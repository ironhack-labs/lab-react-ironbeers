import React from 'react';
import {BrowserRouter as Router,Route,Switch,} from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import BeerList from './components/BeerList/BeerList';
import NewBeer from './components/NewBeer/NewBeer';
import RandomBeer from './components/RandomBeer/RandomBeer';
import SingleBeer from './components/SingleBeer/SingleBeer'

const App = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/random-beer" exact component={RandomBeer} />
          <Route path="/new-beer" exact component={NewBeer} />
          <Route path="/beers/:id" component={SingleBeer} />
          <Route path="/beers" exact component={BeerList} />
          <Route path="/" exact component={Home} />
        </Switch>
      </Router>
    </div>
  );
}
export default App;