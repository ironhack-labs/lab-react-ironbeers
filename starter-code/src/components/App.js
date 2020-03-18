import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { HomePage } from "../pages/Home.page";

export const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={() => <HomePage />} />
      </Switch>
    </Router>
  );
};

export default App;
