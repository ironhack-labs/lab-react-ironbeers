import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import Beers from "./Beers";
import Beer from "./Beer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/beers" component={Beers} />
          <Route path="/beers/:id" component={Beer} />
          <Route path="/random-beer" render={() => <Beer match={{ params: { id: "random" } }} />} />
          {/* <Route path="/new-beer" component={NewBeer} /> */}
        </Switch>
      </div>
    );
  }
}

export default App;
