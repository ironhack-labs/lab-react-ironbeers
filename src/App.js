import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import Beers from './pages/beers';
import NewBeer from './pages/new-beer';
import RandomBeer from './pages/random-beer';
import NotFound from './pages/NotFound';
import { Route, Switch } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Switch>
          <Route
            exact
            path="/"
            render={(props) => {
              return <Home />;
            }}
          />
          <Route path="/beers" component={Beers} />
          <Route path="/new-beer" component={NewBeer} />
          <Route path="/random-beer" component={RandomBeer} />
          <Route component={NotFound} />
        </Switch>
      </header>
    </div>
  );
}

export default App;
