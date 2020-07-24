import React from 'react';
import { Switch, Route } from "react-router-dom";
import './App.css';
import Home from './views/Home';
import Beers from './views/Beers';
import RandomBeer from './views/RandomBeer';
import NewBeer from './views/NewBeer';
import OneBeer from './views/OneBeer.jsx';


function App() {
  return (
    <div className="App">
      
      <main className="content">
      <Switch>
        <Route
          exact
          path="/"
          render={(props) => {
            console.log(props, 'props in app');
            return <Home {...props} />;
          }}
        />
        <Route exact path="/beers" component={Beers} />
        <Route path="/random-beer" component={RandomBeer} />
        <Route path="/new-beer" component={NewBeer} />
        <Route path="/beers/:beerId" component={OneBeer} />
      </Switch>
      </main>
    </div>
  );
}

export default App;
