import React, { Component } from 'react';
import './App.css';
import Home from './components/home';
import Beers from './components/beers';
import SingleBeer from './components/randombeer';
import NewBeer from './components/newbeer';
import BeerDetails from './components/beerdetails';
import { Switch, Route } from 'react-router-dom';

// import {projects as Projects} from './components/projects';
// import projectDetails from './components/ProjectDetails';




class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">

          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/beers' component={Beers} />
            <Route exact path='/newbeer' component={NewBeer} />
            <Route exact path='/randombeer' component={SingleBeer} />
            <Route exact path='/beer.name' component={BeerDetails} />

            {/* <Route exact path='/projects' component={Projects}/> */}
            {/* <Route exact path="/projects/:id" component={projectDetails} /> */}

          </Switch>


        </header>
      </div>
    );
  }
}

export default App;
