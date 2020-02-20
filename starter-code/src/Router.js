import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Nav from './components/Nav'
import App from './pages/home/App'
import Beers from './pages/Beers/Beers'

// const Home = () => <h1>Home</h1>
// const ListBeer = () => <h1>Beer List</h1>
const DetailBeer = () => <h1>Detail Beer</h1>
const newBeer = () => <h1>New Beer</h1>

const Router = () => {
    return (
        <BrowserRouter>
        <Nav/>
            <Switch>
                <Route exact path='/' component={App} />
                <Route exact path='/beer/:id' component={newBeer} />
                <Route exact path='/beers' component={Beers} />
                <Route exact path='/random-beer' component={DetailBeer} />
                <Route exact path='/new-beer' component={newBeer} />
            </Switch>
        </BrowserRouter>
    )
}

export default Router
