import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import ListOfBeers from './components/List-Beers'
import BeerDetails from './components/Beer-Details';
import BeerForm from './components/Beer-Form';
import BeerRandom from './components/Beer-Random';
import Navbar from './components/navbar/Navbar'
import QueryOfBeers from './components/Query-Beer';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Navbar />
          <Switch> 
            <Route exact path='/' component={ListOfBeers} />
            <Route exact path='/beer/:id' component={BeerDetails} />
            <Route exact path='/randombeer' component={BeerRandom} />
            <Route exact path='/makebeer' component={BeerForm} />
            <Route exact path='/search/:query' component={QueryOfBeers}/>
          </Switch>
      </div>
    );
  }
}

export default App;
