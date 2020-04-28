import React, { Component } from 'react';
import { Route, Link, Switch, withRouter } from "react-router-dom";
import './App.css';
import Beers from './components/Beers';
import RandomBeer from './components/Random';
import NewBeer from './components/New-Beer';
import ShowInfoBeer from './components/ShowInfoBeer';
import WelcomePage from './components/WelcomePage';


class App extends Component {
  render() {
    return (
      <div className="App">               
          <header>   
            <Link to="/"><h1>IronBeers</h1></Link>
          </header>

          <Switch>
            <Route exact path="/" component={WelcomePage} />
            <Route exact path="/beers" component={Beers} />
            <Route exact path="/beers/:id" component={ShowInfoBeer} />
            <Route exact path="/random" component={RandomBeer} />
            <Route exact path="/new" component={NewBeer} />
          </Switch>
      </div>
    );
  }
}

export default App;
