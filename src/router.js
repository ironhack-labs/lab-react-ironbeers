import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import LayoutApp from './components/LayoutApp'
import Home from './pages/Home'
import Beers from './pages/Beers'
import BeerDetail from "./pages/BeerDetail"
import NewBeer from "./pages/NewBeer"
import RandomBeer from './pages/RandomBeer'


//const Home = () => <h1>Home</h1>
//const Beers= () => <h1>Beers</h1>
//const RandomBeer = () => <h1>RandomBeer</h1>
//const NewBeer = () => <h1>NewBeer</h1>

function router() {

    return (
      <Router>
           <LayoutApp>
                <Switch>
                    <Route component={Home} path='/' exact/>
                    <Route component={Beers} path='/beers' exact/>
                    <Route component={BeerDetail} path='/beers/:beerId' exact/>
                    <Route component={RandomBeer} path='/random' exact/>
                    <Route component={NewBeer} path='/new' exact />
                </Switch>
          </LayoutApp>
      </Router>
    )
}

export default router
