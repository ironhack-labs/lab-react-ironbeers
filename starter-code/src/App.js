import React, { Component } from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Navbar from "./Navbar";
import Beers from "./Beers";
import BeerDetails from "./BeerDetails";
import Home from "./Home";
import RandomBeer from "./RandomBeer";
import NewBeer from "./NewBeer";
// import Randombeer from './Randombeer';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/beers" component={Beers} />
          <Route exact path="/BeerDetails/:beerId" component={BeerDetails} />
          <Route exact path="/random-beer" component={RandomBeer} />
          <Route exact path="/new-beer" component={NewBeer} />
          {/* <Route exact path="/Randombeer" component={Randombeer}/> */}
          {/* <Route exact path="/beers" render={(props) => <Beers {...props}/>} /> */}
          {/* <Route exact path="/BeerDetails" render={(props)=> <BeerDetails {...props}/>} component={BeerDetails} /> */}
        </Switch>
      </div>
    );
  }
}

export default App;
