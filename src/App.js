import React from 'react';

import './App.css';
import {  Switch, Route } from 'react-router-dom';

import Home from './components/home/Home';


function App() {
  return (
    <div className="App">

      <Switch>
        <Route
          exact path="/" render={(props) => <Home {...props} />}/>

       

      </Switch>
    </div>
  );
}

export default App;
