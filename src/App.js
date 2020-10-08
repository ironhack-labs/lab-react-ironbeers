import React from "react";
import { Route, Switch } from "react-router-dom";
import NavMain from "./components/NavMain.jsx";
import Home from './pages/Home'
import "./App.css";

function App() {
  return (
    <div className="App">
      <NavMain />
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
