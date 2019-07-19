import React from 'react'
import {BrowserRouter ,Switch, Route} from 'react-router-dom'
import {Home , BeerList,BeerDetail, RandomBeer, NewBeer}  from './components'
const Router = () => {
    return (
        <BrowserRouter>        
        <Switch>
            <Route exact path ='/' component={Home}/>
            <Route exact path ='/beer_list' component={BeerList}/>
            <Route exact path ='/beers/:id' component={BeerDetail}/>
            <Route exact path ='/random' component={RandomBeer}/>
            <Route exact path ='/new' component={NewBeer}/>
            
        </Switch>
        </BrowserRouter>

    )
}

export default Router
