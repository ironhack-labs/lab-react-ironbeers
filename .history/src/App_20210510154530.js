import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Home from './components/home/Home';

function App() {
  return (
    <div className="App">
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
