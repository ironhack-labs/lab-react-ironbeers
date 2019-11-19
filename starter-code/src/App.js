import React from "react";
import { Route } from "react-router-dom";
import "./App.css";
import { Home, Content } from "./components";

const App = () => (
  <div className="App">
    <Route path="/" component={Home} exact />
    <Route path="/content" component={Content} />
  </div>
);

export default App;
