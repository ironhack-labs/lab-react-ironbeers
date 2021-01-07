import React from 'react';
import { Switch, Route, NavLink } from 'react-router-dom';
import Home from './views/Home';
import AllBeers from './views/allBeers';
import RandomBeer from './views/randomBeer';
import formPage from './views/formPage';
import OneBeer from './views/OneBeer';

// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <nav>
        <NavLink exact to="/">
          Home
        </NavLink>
        <NavLink exact to="/allBeers">
          All Beers
        </NavLink>
        <NavLink exact to="/newBeer/create">
          Add a new Beer
        </NavLink>
        <NavLink exact to="/randomBeer">
          randomBeer
        </NavLink>
      </nav>

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/allBeers" component={AllBeers} />
        <Route exact path="/newBeer/create" component={formPage} />
        <Route exact path="/randomBeer" component={RandomBeer} />
        <Route exact path="/oneBeer/:id" component={OneBeer} />
      </Switch>
    </div>
  );
}

export default App;
