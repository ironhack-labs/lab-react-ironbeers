import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'
import Home from './pages/Home'
import BeerList from './pages/BeerList'
import BeerDetails from './pages/BeerDetails'
import NewBeer from './pages/NewBeer'


//const Home = () => <h1><Link to="/"></Link></h1>
//const BeerList = () => <h1>Beers</h1>
//const RandomBeer = () => <h1>Random Beer</h1>
//const NewBeer = () => <h1> NewBeer</h1>


function AppRouter() {
  return (
    <Router>
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/beers' component={BeerList} exact />
        <Route path='/beer/:beerId' component={BeerDetails} exact />
        
        <Route path='/new-beer' component={NewBeer} exact />
      </Switch>
    </Router>
  )
}

export default AppRouter
