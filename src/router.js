import React from 'react'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import LayoutApp from "./components/LayoutApp"
import Home from './pages/Home'
import AllBeers from './pages/AllBeers'

// Dummy component
const SingleBeer = () => <h1>Single Beer</h1>
const RandomBeer = () => <h1>Random Beer</h1>
const NewBeer = () => <h1>New Beer</h1>

const router = () => (
    <Router>
            <Switch>
                <Route component={Home} path='/' exact />
                <LayoutApp>
                    <Route component={AllBeers} path='/beers' exact/>
                    <Route component={RandomBeer} path='/random-beer'  />
                    <Route component={NewBeer} path='/new-beer'  />
                    {/* <Route component={SingleBeer} path='/:beerId' exact /> */}
                </LayoutApp>
            </Switch>
    </Router>
)

export default router