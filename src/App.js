import React from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import OneBeer from './components/OneBeer/OneBeer';
import AllBeers from './Pages/AllBeers';
import LandingPage from './Pages/LandingPage';
import NewBeer from './Pages/NewBeer/NewBeer';

function App() {

  return (
    <div className="App">
      {(useLocation().pathname !== '/') && (
        <header className="App-header">
          <NavBar/>
        </header>)}

      <main>
        <Switch>
          <Route exact path="/">
            <LandingPage/>
          </Route>
          <Route exact path="/beers">
            <AllBeers/>
          </Route>
          <Route exact path="/beer/random">
            <OneBeer/>
          </Route>
          <Route exact path="/beer/create">
            <NewBeer/>
          </Route>
          <Route exact path="/beer/:id">
            <OneBeer/>
          </Route> */

        </Switch>
      </main>
    </div>
  );
}

export default App;
