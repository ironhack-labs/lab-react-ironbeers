import React, { Component } from "react";
import { Route } from "react-router-dom";

import logo from "./logo.svg";
import "./App.css";
import Home from "./components/Home.jsx";
import AllBeers from "./components/AllBeers.jsx";
import axios from "axios";
import Beer from "./components/Beer.jsx";
import Form from "./components/Form.jsx";

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Home />
        <Route exact path='/beers' component={AllBeers} />
        <Route exact path='/beer/:jola' component={Beer} />
        <Route exact path='/random-beer' component={Beer} />
        <Route exact path='/new-beer' component={Form} />
      </div>
    );
  }
}

export default App;
