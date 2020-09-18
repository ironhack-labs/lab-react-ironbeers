import React from 'react';
import Home from './pages/Home'
import Beers from './pages/Beers'
import Beer from './pages/Beer'
import NewBeer from './pages/New-beer'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'


function App() {
  return (

    <Router>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/all" component={Beers}/>
        <Route path="/beer/:id" component={Beer}/>
        <Route path="/randomBeer" component={Beer}/>
        <Route path="/new" component={NewBeer}/>
      </Switch>
    </Router>
  );
}

export default App;