import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from "react-router-dom";
import HomeWrapper from './components/HomeWrapper';
import Landing from "./components/Landing";

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={() =>  <Landing /> } />
        <Route path="/" component={() => <HomeWrapper />} />
      </Switch>
    )
  }
}

export default App;
