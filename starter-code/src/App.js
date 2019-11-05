import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import BeersList from './components/BeersList';
import RandomBeer from './components/RandomBeer';
import NewBeerForm from './components/NewBeerForm';
import SingleBeer from './components/SingleBeer';



const App = () => {
    return (
      <div className="App">
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/beers'  component={BeersList} />  
          <Route exact path='/random-beer' component={RandomBeer} />
          <Route exact path='/new-beer' component={NewBeerForm} />
          <Route exact path='/:id' component={SingleBeer} />  
        </Switch>
      </div>
    );
  
}

export default App;
