import React from 'react';
import {Switch, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import Navbar from './components/Navbar';
import Home from './components/Home';
import AllBeers from './components/AllBeers';
import BeerDetails from './components/BeerDetails';
import AddBeer from './components/AddBeer';

function App() {
  return (
    <div>
      <Navbar/>
      <Switch>
        <Route exact path='/'>
          <Home/>
        </Route>
        <Route path='/beers'>
          <AllBeers/>
        </Route>
        <Route path="/beer/:id" render={(props) => <BeerDetails {...props}/>} />
        <Route path="/random-beer" render={(props) => <BeerDetails {...props}/>} />
        <Route path='/new-beer'>
          <AddBeer/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
