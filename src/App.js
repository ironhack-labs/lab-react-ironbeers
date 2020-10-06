import React from 'react';
import './App.css';
import {
  Switch,
  Route,
} from "react-router-dom";
import Home from './components/Home'
import Beers from './components/Beers';
import BeersDetail from './components/BeersDetail'
import BeersRandom from './components/BeersRandom'
import Navbar from './components/Navbar';
import NewBeer from './components/NewBeer';

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <header>
          <Navbar />
        </header>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/beers" component={Beers}></Route>
          <Route exact path="/beers-random" component={BeersRandom}></Route>
          <Route exact path="/beers/:beerId" component={BeersDetail}></Route>
          <Route exact path="/new-beer" component={NewBeer}></Route>
        </Switch>
      </div>
    );
  }
}

export default App;
