import React from 'react';
import './App.css';
import Navbar from './components/NavBar';
import HomePage from './pages/HomePage';
import Beers from './pages/Beers';
import SingleBeer from './pages/SingleBeer';
import NewBeer from './pages/NewBeer';
import RandomBeer from './pages/RandomBeer';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/beers" component={Beers} />
        <Route exact path="/random-beer" component={RandomBeer} />
        <Route exact path="/new-beer" component={NewBeer} />
        <Route
          exact
          path="/beers/:id"
          render={(routeProps) => {
            return <SingleBeer {...routeProps} />;
          }}
        />
      </Switch>
    </div>
  );
}

export default App;
