import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Switch } from 'react-router-dom';

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
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route path="/list" component={List}></Route>
        <Route exact path="/detail/:id" component={Detail}></Route>
        <Route path="/add" component={Add}></Route>
        <Route path="/random" component={Random}></Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
