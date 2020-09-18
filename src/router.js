import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Home from "./pages/Home"
import Beers from "./pages/Beers"
import BeerDetail from "./pages/BeerDetail"
import RandomBeer from './pages/Random'
import CreateBeer from './pages/CreateBeer'
import { createEvent } from "@testing-library/react"
//const BeerDetail = () => <h1>Hola</h1>

//const CreateBeer = () => <h1>Create</h1>


const router = () => {
    return ( 
			<Router>
        <Switch>
					<Route component={Home} path="/" exact />
					<Route component={Beers} path="/beers" exact/>
                    <Route component={RandomBeer} path='/random' exact/>
                    <Route component={CreateBeer} path='/createBeer' exact/>
                    <Route component={BeerDetail} path='/:beerId' exact/>
        </Switch>
			</Router>
    )
}

export default router 