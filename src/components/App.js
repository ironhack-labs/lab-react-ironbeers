import React from 'react';
import '../App.css';
import { Switch, Route, Redirect } from 'react-router-dom'
import Home from './Home'
import BaseBeers from './BaseBeers'
import NotFound from './misc/NotFound'

function App() {
  return (
      <div className="App">
      <Switch>
        <Route exact path='/home' component={Home} />
        <Route exact path='/beers' component={BaseBeers} />
        <Route exact path="/" component={() => (
            <Redirect to="/home" />
          )} />

          <Route path="/" component={NotFound}/>
        </Switch>

    <button className="btn btn-primary">prueba</button>
    </div>
  );
}

export default App;
