import React, { Component } from 'react';
import './index.css';
import './App.css';
import './index.css'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Main from './components/Main'
import List from './components/List-beer'
import ID from './components/Idbeer'
import Random from './components/Random-beer'
import New from './components/New-beer'

class App extends Component {
    render() {
        return (
            <div>
                <Router>

                    <Route exact path="/" component={Main} />

                    <Route exact path="/beers" component={List} />
                    <Route exact path="/random-beer" component={Random} />
                    <Route exact path="/new-beer" component={New} />
                    <Route exact path='/beers-id/:id' component={ID} />
                </Router>
            </div>
        )
    }
}
export default App;