import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route } from 'react-router-dom';

import Navigation from './components/Navigation';
import Home from './components/Home';
import List from './components/List';
import Detail from './components/Detail';
import Add from './components/Add';
import Random from './components/Random';

function App() {
  return (
    <div>
      <Navigation></Navigation>
      <div className="container">
        <Route exact path="/" component={Home}></Route>
        <Route path="/list" component={List}></Route>
        <Route path="/detail/:id" component={Detail}></Route>
        <Route path="/add" component={Add}></Route>
        <Route path="/random" component={Random}></Route>
      </div>
    </div>
  );
}

export default App;
