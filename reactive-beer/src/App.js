import "./App.css";
import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import ListBeer from "./ListBeers";
import Home from "./Home";
import RandomBeer from "./RandomBeer";
import SingleBeer from "./SingleBeer";
import NewBeer from "./NewBeer";

class App extends Component {
  render() {
    return (
      <div className="App">
       
        <Link to="/">Home</Link>
       
        

        <Route exact path="/allbeers" component={ListBeer} />
        <Route exact path="/" component={Home} />
        <Route exact path="/randombeer" component={RandomBeer} />
        <Route exact path="/beers/:beer_id" component={props => <SingleBeer {...props} />} />
        <Route exact path="/newbeer" component={NewBeer}/>
      </div>
    );
  }
}

export default App;
