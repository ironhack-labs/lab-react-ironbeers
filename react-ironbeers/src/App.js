import React, { Component } from 'react';
import Home from './homepage/Home'
import './App.css';
import { Switch, Route } from 'react-router-dom'
import AllBeers from './beers/AllBeers'
import BeerDetails from "./beers/BeerDetails"
import BeerRandom from './beers/BeerRandom'


class App extends Component {
    render() {
        return (
            <Switch>
                <Route path="/" exact render={() => <Home />} />
                <Route path="/beers" exact render={() => <AllBeers />} />
                <Route path="/beers/:id" exact render={props => <BeerDetails {...props} />} />
                <Route path="/random-beer" render={() => <BeerRandom />} />
            </Switch>
        );
    }
}

export default App;
