import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import BeerList from "./BeerList";
import Home from "./Home";
import RandomBeer from "./RandomBeer";
import OneBeer from "./OneBeer";
import NewBeer from "./NewBeer";

class App extends Component {
  render() {
    return (
      <div className="App">

        <Link to="/">Home</Link>



        <Route exact path="/allBeers" component={BeerList} />
        <Route exact path="/" component={Home} />
        <Route exact path="/randomBeer" component={RandomBeer} />
        <Route exact path="/beers/:beer_id" component={props => <OneBeer {...props} />} /> 
        <Route exact path="/newBeer" component={NewBeer}/> 
      </div>
    );
  }
}
export default App;
