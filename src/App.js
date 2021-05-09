import React from 'react';
import Homepage from './components/Homepage';
import AllBeers from './components/AllBeers';
import './App.css';
import { Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Route exact path="/" component={Homepage} />
      <Route path="/beers" component={AllBeers} />
    </div>
  );
}

export default App;
