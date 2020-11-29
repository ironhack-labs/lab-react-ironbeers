import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import LayoutApp from './components/LayoutApp'
import 'antd/dist/antd.css'
import AllBeers from './components/AllBeers'
import BeerDetails from './components/BeerDetails'
import RandomBeer from './components/RandomBeer'
import NewBeer from './components/NewBeer'

export default function RouterApp() {

    const Home = () => <div>Home</div>

    return (
      <Router>
        <LayoutApp>
          <Switch>
            <Route component={AllBeers} exact path="/" />
            <Route component={AllBeers} exact path="/beers" />
            <Route component={BeerDetails} path="/beer/:id" />
            <Route component={RandomBeer} path="/random" />
            <Route component={NewBeer} path="/new-beer" />
          </Switch>
        </LayoutApp>
      </Router>
    );
}


