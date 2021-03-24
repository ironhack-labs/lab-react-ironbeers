import React from 'react';
import {Switch, Route} from 'react-router-dom'
import Home from './Components/Home'
import AllBeers from './Components/AllBeers'
import RandomBeer from './Components/RandomBeer'
import NewBeer from './Components/NewBeer.js'
import BeerDetails from './Components/BeerDetails'

function App() {
  return (
    <div className="App">
  <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/AllBeers" component={AllBeers} />
        <Route path="/RandomBeer" component={RandomBeer} />
        <Route path="/NewBeer" component={NewBeer} />
        <Route path="/BeerDetails/:id" component={BeerDetails} /> */}
      </Switch>
    </div>
  );
}

export default App;
