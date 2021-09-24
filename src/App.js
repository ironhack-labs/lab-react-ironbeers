import React from 'react';
import './App.css';
import {Switch, Route } from "react-router-dom";
import HomePage from './pages/HomePage'
import BeersPage from './pages/BeersPage'
import RandomeBeerPage from './pages/RandomeBeerPage'
import NewBeerPage from './pages/NewBeerPage'

function App() {


  return (
    <div className="App">
      <header className="App-header">
        <h1>HI</h1>
      </header>
      <section>
      <Switch>
          {/* <Route path="/" component={HomePage} />
          <Route path="/beers" component={BeersPage}/>
          <Route path="/random-beer" component={RandomeBeerPage}/>
          <Route path="/new-beer" component={NewBeerPage}/> */}

          <Route path="/" render={(routeProps) => <HomePage {...routeProps}/>}/>
          <Route path="/beers" render={(routeProps) => <BeersPage {...routeProps}/>}/>
          <Route path="/random-beer" render={(routeProps) => <RandomeBeerPage {...routeProps}/>}/>
          <Route path="/new-beer" render={(routeProps) => <NewBeerPage {...routeProps}/>}/>
            
        </Switch>
      </section>
    </div>
  );
}

export default App;
