import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import HomePage from "./components/homePage/HomePage";

function App() {
  return (
    <div className="App">
      <div className="App__content">
      <BrowserRouter>
          <Switch>
            {/* <Route path="/beers" exact component={Beers} />
            <Route path="/random-beer" component={RandomBeer} />
            <Route path="/new-beer" component={NewBeer} /> */}
            <Route path="/" exact component={HomePage} />
          </Switch>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
