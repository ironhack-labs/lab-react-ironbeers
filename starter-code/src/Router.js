import {BrowserRouter,Switch,Route} from "react-router-dom"
import React from "react"

import Beers from "./components/Beers";
import NewBeer from "./components/NewBeer";
import Home from "./components/Home";
import RandomBeer from "./components/RandomBeer";
import Nav from "./components/Nav"

const Router = ()=>{
    return(
        <BrowserRouter>
            {/* <Nav/>
            <Switch> */}
                <Route path="/" component={Home} exact />
                <Route path="/beers" component={Beers} exact />
                <Route path="/new-beer" component={NewBeer} exact />
                <Route path="/random-beer" component={RandomBeer} exact />
            {/* </Switch> */}
        </BrowserRouter>
    )
}

export default Router