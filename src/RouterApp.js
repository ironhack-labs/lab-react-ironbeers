import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import LayoutApp from './components/LayoutApp'
import 'antd/dist/antd.css'
import AllBeers from './components/AllBeers'

export default function RouterApp() {

    const Home = () => <div>Home</div>
    // const AllBeers = () => <div>beers</div>
    const BeerDetail = () => <div>dettails</div>
    const RandomBeer = () => <div>random</div>
    const NewBeer = () => <div>new bbwe</div>
    

    return (
      <Router>
        <LayoutApp>
          <Switch>
            <Route component={Home} exact path="/" />
            <Route component={AllBeers} exact path="/beers" />
            {/* <Route component={BeerDetail} path="/:id" /> */}
            <Route component={RandomBeer} path="/random" />
            <Route component={NewBeer} path="/new" />
          </Switch>
        </LayoutApp>
      </Router>
    );
}


