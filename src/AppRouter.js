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
import RandomBeer from './pages/RandomBeer'
import NewBeer from './pages/NewBeer'
import LayoutApp from './components/LayoutApp'


//const Home = () => <h1><Link to="/"></Link></h1>
//const BeerList = () => <h1>Beers</h1>
//const RandomBeer = () => <h1>Random Beer</h1>
//const NewBeer = () => <h1> NewBeer</h1>


function AppRouter() {
  return (
    <Router>
      <Switch>
        <Route path='/' component={Home} exact />
        <LayoutApp>
        <Route path='/beers' component={BeerList} exact />
        <Route path='/beer/:beerId' component={BeerDetails} exact />
        <Route path="/random-beer" component={RandomBeer} exact />
        <Route path='/new-beer' component={NewBeer} exact />
        </LayoutApp>
      </Switch>
    </Router>
  )
}

export default AppRouter
