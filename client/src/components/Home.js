import React, { Component } from "react";
import Section from "./Section";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import List from "./List";
import Allbeers from "./Allbeers";
import Single from "./Single";
class Home extends Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path="/" component={Section} />
            <Route path="/all" component={Allbeers} />
            <Route path="/single/:id" component={Single} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default Home;
