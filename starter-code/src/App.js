import React from 'react';
import Home from './scenes/Home'
import {Switch, Route} from 'react-router-dom'

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home}/>
      {/* <Route path="/all" component={About}/>
      <Route path="/random" component={User}/>
      <Route path="/new" component={User}/> */}
    </Switch>
  );
}

export default App;