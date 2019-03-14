import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Beers from './components/Beers';
import Homepage from './components/Homepage';
import Beerdetails from './components/Beerdetails';
import Randombeer from './components/Randombeer';
import Newbeer from './components/Newbeer';


class App extends Component {
  render() {
    return (
      <div className="App">
       <Navbar />
        <Switch>
          <Route exact path="/" component={Homepage}/>
          <Route exact path="/beers" component={Beers}/>
          <Route exact path="/beers/:id" component={Beerdetails}/>
          <Route exact path="/random-beer" component={Randombeer}/>
          <Route exact path="/new-beer" component={Newbeer}/>

        </Switch>
      </div>
    );
  }
}

export default App;

