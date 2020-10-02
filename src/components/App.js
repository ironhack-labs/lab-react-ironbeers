import React from 'react'
import { Switch, Route } from 'react-router-dom'

import './App.css'

import Index from './pages/index/Index'
import AllBeers from './pages/beersList/BeersList'
import DetailView from './pages/detailView/DetailView'
import CreationView from './pages/createBeer/CreateBeer'




function App() {
  return (
    <>

      <Switch>
        <Route path="/" exact render={() => <Index />} />
        <Route path="/beers" exact render={() => <AllBeers />} />
        <Route path="/beers/details/:beerId" exact render={(props) => <DetailView {...props} />} />
        <Route path="/beers/random" render={() => <DetailView />} />
        <Route path="/beers/new" render={() => <CreationView />} />
      </Switch>

    </>
  );
}

export default App;