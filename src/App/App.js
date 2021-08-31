import React from 'react';
import Navbar from '../Navbar';
import Home from '../Home';
import AllBeers from '../AllBeers';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path="/" component={Home} exact/>
        <Route path="/all-beers" component={AllBeers} />
      </Switch>
    </div>
  );
}

export default App;
