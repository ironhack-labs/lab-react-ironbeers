import React from 'react';
import NavBar from './components/NavBar';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from './components/Home';
import AllBeers from './components/AllBeers';
import RandomBeer from './components/RandomBeer';
import SingleBeer from './components/SingleBeer';
import NewBeer from './components/NewBeer';

function App() {
  return (
    <div className="App">
      <header>
        <NavBar />
      </header>
      <section className="container">
        <div className="row">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/beers" component={AllBeers} />
            <Route exact path="/beers/:beerId" component={SingleBeer} />
            <Route exact path="/new-beer" component={NewBeer} />
            <Route exact path="/random-beer" component={RandomBeer} />
            <Redirect to="/home" />
          </Switch>
        </div>
      </section>
      <footer>React IronBeers by Juan Romero Gómez</footer>
    </div>
  );
}

export default App;
