import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

import { Switch, Route } from 'react-router-dom'

import Home from './pages/Home/index'
import BeerList from './pages/Beers/BeerList'
import BeerForm from './pages/Beers/BeerForm'
import BeerCard from './pages/Beers/BeerCard'

function App() {
  return (
    <Switch>
      <Route path="/" exact render={() => <Home />} />
      <Route path="/AllBeers" render={() => <BeerList />} />
      <Route path="/RandomBeer" render={() => <BeerCard />} />
      <Route path="/NewBeer" render={() => <BeerForm />} />
      <Route path="/:beer_id" render={props => <BeerCard {...props} />} />
    </Switch>
  )
}

export default App
