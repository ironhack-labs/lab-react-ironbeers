import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import { Home } from "./pages/home";

export const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
};
