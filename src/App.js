import React from 'react';
import { Route, Switch } from "react-router-dom";
// import logo from './logo.svg';
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import AllBeers from "./pages/AllBeers";
import RandomBeer from "./pages/RandomBeer";
import NewBeer from "./pages/NewBeer";
import OneBeer from "./pages/OneBeer";
import './App.css';

class App extends React.Component {

  state = {

  };

render() {

  return (
      <div>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/AllBeers" component={AllBeers}/>
          <Route exact path="/RandomBeer" component={RandomBeer}/>
          <Route exact path="/NewBeer" component={NewBeer}/>
{/* 
          <Route
             exact 
             path="/NewBeer" 
             render={(handleCreateBeer) => {
               return <NewBeer />
             }}
            //  component={NewBeer}
            /> */}
          <Route path="/AllBeers/:beerId" component={OneBeer} />
          <Route component={NotFound}/>
        </Switch>
      </div>
    );
  }
}

export default App;
