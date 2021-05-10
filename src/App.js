import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home.js';
import Beers from './components/Beers';
import RandomBeer from './components/RandomBeer';
import NewBeer from './components/NewBeer';
import { Route, Switch } from 'react-router-dom';
import BeerDetails from './components/BeerDetails';

// const NotFound = () => {
//   return <h3>Not Found 🙃</h3>
// }

function App() {
  return (
      <div className="App">
         <Navbar />
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/beers' component={Beers}/>
          <Route exact path='/random-beer' component={RandomBeer}/>
          <Route exact path='/new-beer' component={NewBeer}/>
          <Route exact path='/beers/:id' component={BeerDetails}/>
        </Switch>
 
      </div>
    );
  }

export default App;
