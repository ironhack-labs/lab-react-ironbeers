import React, { useEffect } from 'react';
import './App.css';
import { Route, Switch} from 'react-router-dom';
import Home from './views/Home';
import AllBeers from './views/AllBeers';
import Header from './components/Header/Header';
import Beer from './views/Beer';
import RandomBeer from './views/RandomBeer';
import NewBeer from './views/NewBeer';


function App() {



  return (
    <div className="App">
      
      <Header />
      
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/beers">
          <AllBeers/>
        </Route>
        <Route path="/random">
          <RandomBeer/>
        </Route>
        <Route path="/new">
          <NewBeer/>
        </Route>
        <Route path="/:beerId">
          <Beer/>
        </Route>
      </Switch>


      
    </div>
  );
}

export default App;
