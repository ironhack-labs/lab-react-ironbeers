import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import ListBeers from './Components/ListBeers/ListBeers';
import RandomBeer from './Components/RandomBeer/RandomBeer';
import NewBeer from './Components/NewBeer/NewBeer';
import SingleBeer from './Components/SingleBeer/SingleBeer';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
      
       {/*    <SearchBeer /> */}
          <Switch> 
          <Route path="/beers/:id" component={SingleBeer} />
          <Route exact path="/beers" component={ListBeers} />
          <Route exact path="/random-beer" component={RandomBeer} />
          <Route exact path="/new-beer" component={NewBeer} />
          <Home />
          </Switch>
        
      </div>
    </BrowserRouter>
  );
}


export default App;
