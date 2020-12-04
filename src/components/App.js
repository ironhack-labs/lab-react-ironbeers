import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

import { Switch, Route } from 'react-router-dom'

import Home from './views/Home'
import BeersList from './views/list-beers/BeersList'
import SingleBeer from './views/single-beer/SingleBeer'
import RandomBeer from './views/random-beer/RandomBeer'
import NewBeer from './views/new-beer/NewBeer'

function App() {
  return (
    <Switch>
      <Route path='/' exact render={() => <Home />} />
      <Route path='/beers' exact render={() => <BeersList />} />
      <Route path='/beers/:id' render={props => <SingleBeer {...props} />} />
      <Route path='/random-beer' render={() => <RandomBeer />} />
      <Route path='/new-beer' render={() => <NewBeer />} />
    </Switch>
  )
}

export default App
