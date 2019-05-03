import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Home from "./Home";
import Beers from "./Beers";
import RandomBeer from "./RandomBeer";
import NewBeer from "./NewBeer"

class App extends React.Component {
  render() {
  return (
    <React.Fragment>
      <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/allbeers' component={Beers}/>
          <Route exact path='/allbeers/:id' component={Beers}/>
          <Route exact path='/randombeer' component={RandomBeer}/>
          <Route exact path='/newbeer' component={NewBeer}/>
        </Switch>
    </React.Fragment>
  );  
  }
}

export default App;
