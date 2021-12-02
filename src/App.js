import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';
// import Navbar from './components/Navigation';
import Beers from './components/beers';
import Home from './components/home';

function App() {
  return (
    <>
         {/* <Navbar /> */}
        <Switch>
          <Route path="/" exact render={() => <Home />} />
          <Route path="/beers" render={() => <Beers />} />
          <Route path="/random-beer" render={(props) => <Random-beer {...props} />} />
          <Route path="/new-beer" render={(props) => <New-beer {...props} />} />
        </Switch>
      
    </>
  );
}

export default App;
