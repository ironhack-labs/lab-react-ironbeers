import React from 'react';
import Home from './scenes/Home'
import Beers from './scenes/beers'
import Random from './scenes/random-beer'
import New from './scenes/new-beer'
import {Switch, Route} from 'react-router-dom'

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route path="/all" component={Beers}/>
      <Route path="/random" component={Random}/>
      <Route path="/new" component={New}/>
    </Switch>
  );
}

export default App;