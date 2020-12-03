import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

import { Switch, Route } from 'react-router-dom'

import Home from './pages/home-page/Home'
import BeersList from './pages/list-beers/BeersList'
import SingleBeer from './pages/single-beer/SingleBeer'
import RandomBeer from './pages/random-beer/RandomBeer'
import NewBeer from './pages/new-beer/NewBeer'

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
