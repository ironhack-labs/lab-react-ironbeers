import React from 'react';
import { Route, Switch} from "react-router-dom";
import Home from "./pages/Home";
import NavMain from "./components/NavMain";
import Beers from "./pages/Beers";
import BeerDetails from "./pages/BeerDetails";
import RandomBeer from "./pages/RandomBeer";
import NewBeer from "./pages/NewBeer";
import './App.css';

function App()  {
  
    return (
    
      <div className="app">
     
      <NavMain/>
      <Switch>

        <Route exact path="/" component={Home} />
        <Route exact path="/beers" component={Beers} />
        <Route path="/beers/:id" component={BeerDetails} />
        <Route path="/random-beer" component={RandomBeer} />
        <Route path="/new-beer" component={NewBeer} />

      </Switch>
     
      </div>
  
    );
  }


export default App;
