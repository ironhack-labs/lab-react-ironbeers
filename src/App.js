import React from 'react';
import { Route, Switch, Link } from 'react-router-dom'

import NavBar from './components/NavBar';
import Beers from './components/Beers';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Route>
        <Switch>
          <Link to='/'>
            <Beers />
          </Link>
        </Switch>
      </Route>


    </div>
  );
}

export default App;
