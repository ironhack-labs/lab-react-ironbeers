import React, { Component } from 'react';
import HomeList from "./components/HomeList";
import { Switch, Route } from "react-router-dom";
import './App.css';
import BeersList from "./components/BeersList";

class App extends Component {
  render() {
  return (
    <div className="App">
     
     <HomeList/>
     <Switch>
     <Route exact path="/beers" component={BeersList} />
     </Switch>
    </div>
  );

}
}
export default App;
