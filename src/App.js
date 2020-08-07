import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Homepage from './components/Homepage';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Homepage} />{' '}
        <Route path="/random-beer" />
        <Route path="/new-beer" />
      </Switch>{' '}
    </BrowserRouter>
  );
}

export default App;