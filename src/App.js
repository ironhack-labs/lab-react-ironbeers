import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import { Home, Beers } from './pages'
import 'antd/dist/antd.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route
          exact
          path="/"
          render={props => <Home {...props} />}
        />
        <Route
          exact
          path="/beers"
          render={props => <Beers {...props} />}
        />
      </Switch>
    </div>
  );
}

export default App;
