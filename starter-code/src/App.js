import React, { Component } from "react";
import "./App.css";
import Beers from "./Components/Beers.js";
import Home from "./Components/Home.js";
import Detail from "./Components/Detail.js";
import { UserProvider } from "./Components/UserContext";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class App extends Component {

  render() {
    return (
      <UserProvider value={this.context}>
        <div className="App">
          <header>
            <img alt="home" src="./images/sydney-opera-house.png"></img>
          </header>

          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/beers" component={Beers}/>
            <Route exact path="/beers/detail/:id" component={Detail} />
          </Switch>
        </div>
      </UserProvider>
    );
  }
}

export default App;
