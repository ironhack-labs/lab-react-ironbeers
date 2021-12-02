import React from 'react';
import { Switch, Route } from 'react-router-dom'
import './App.css';
import Home from './Components/Home/Home'
import BeerList from './Components/BeerList/BeerList'
import BeerDetails from './Components/BeerDetails/BeerDetails'
import RandomBeer from './Components/RandomBeer/RandomBeer'
import NewBeer from './Components/NewBeer/NewBeer'

function App() {
  return (
    <div>

      <main>
        <Switch>
          <Route path="/" exact render={() => <Home />} />
          <Route path="/beer-list" render={() => <BeerList />} />
          <Route path="/beer/random" render={() => <RandomBeer /> } />
          <Route path="/beer/new-beer" render={(props) => <NewBeer {...props} /> } />
          <Route path="/beer/:id" render={(props) => <BeerDetails {...props} />} />
        </Switch>
      </main>
      
    </div>
  );
}

export default App;
