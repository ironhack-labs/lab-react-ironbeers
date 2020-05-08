import React, { Component } from 'react';
import './App.css';
import Home from '../pages/Home/Home'
import Beers from '../pages/Beers/Beers'

import { Switch, Route, Redirect } from 'react-router-dom'


class App extends Component {
    render() {
        return (
            <>
                <h1>This will be the Navbar</h1>
                <Switch>
                    <Route path="/" exact render={() => <Home />} />
                    <Route path="/beers" exact render={() => <Beers />} />
                </Switch>
            </>
        );
    }
}

export default App;
