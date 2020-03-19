import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Layout } from "./layouts/Layout";
import { HomePage } from "./pages/Home.page";
import logo from "../public/images/logo.svg";

export const App = () => {
  // <div className="App">
  //   <header className="App-header">
  //     <img src={logo} className="App-logo" alt="logo" />
  //     <h1 className="App-title">Welcome to React</h1>
  //   </header>
  //   <p className="App-intro">
  //     To get started, edit <code>src/App.js</code> and save to reload.
  //   </p>
  // </div>

  return (
    <Router>
      <Layout>
        <Switch>
          <Route path="/" exact component={HomePage} />
        </Switch>
      </Layout>
    </Router>
  );
};
