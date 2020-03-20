import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Layout from "./layouts/Layout"
import HomePage from "./pages/Home.page"
import './App.css';


const App = () => (
  <Router>
    <Layout>
      <Switch>
        <Route path="/" exact component={HomePage} />
      </Switch>
    </Layout>
  </Router>
);

export default App;