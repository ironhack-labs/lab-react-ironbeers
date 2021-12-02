import React from 'react';
import { Route, Switch } from 'react-router';
import './App.css';
import Beers from './components/Beers';
import HomePage from './components/HomePage';
import NewBeer from './components/NewBeer';
import RandomBeer from './components/RandomBeer';

function App() {
  return (
    <div className="App">
<>
      <main>
        <Switch>
          <Route path="/" exact render={() => <HomePage />} />
          <Route path="/beers" render={() => <Beers />} />
          <Route path="/random-beers" render={() => <RandomBeer />} />
          <Route path="/new-beers" render={() => <NewBeer />} />
          <Route path="/beer/:id" render={(props) => <NewBeer {...props} />} />
        </Switch>
      </main>
    </>

    </div>
  );
}

export default App;



