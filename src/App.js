import React from 'react';
import { Switch, Route } from "react-router-dom";
import Home from "./Views/Home"
import AllBeers from './Views/AllBeers'
import RandomBeer from './Views//RandomBeer'
import NewBeer from './Views//NewBeer'
import Beer from './Views//Beer'
import NavLink from './components/NavLink'
import './App.css';

class App extends React.Component {



  render(){
    return (
      <div className="App">

        <NavLink />
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/beers" component={AllBeers}/>
          <Route exact path="/random-beer" component={RandomBeer}/>
          <Route exact path="/new-beer" component={NewBeer}/>
          <Route exact path="/beers/:id" component={Beer}/>
        </Switch>

      </div>
    );

  }

}

export default App;