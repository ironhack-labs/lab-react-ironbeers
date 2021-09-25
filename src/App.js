import React from 'react';
import './App.css';
import HomePage from "./components/HomePage";
import { Route, Switch } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
      </header>
      <Switch>
        <Route exact path="/" component={HomePage} /> 
      </Switch>
    </div>
  );
}

export default App;
