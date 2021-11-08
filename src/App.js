import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Homepage from './components/HomePage'
import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/"><Homepage/></Route>
      </Switch>
    </div>
  );
}

export default App;
