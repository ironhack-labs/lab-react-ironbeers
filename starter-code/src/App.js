import React, {Component} from 'react';
import './App.css';
import {BeerProvider} from "./context/BeerContext";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Home from "./pages/Home";
import Beers from "./pages/Beers";
import Beer from "./pages/Beer";
import RandonBeer from "./pages/RandonBeer";
import NewBeer from "./pages/NewBeer";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <BeerProvider>
          <Switch>
            <Route exact path={'/'} component={Home} />
            <Route exact path={'/beers'} component={Beers} />
            <Route exact path={'/beers/:dataId'} component={Beer} />
            <Route exact path={'/random-beer'} component={RandonBeer} />
            <Route exact path={'/new-beer'} component={NewBeer} />
          </Switch>
        </BeerProvider>
      </BrowserRouter>
    );
  }
}

export default App;
