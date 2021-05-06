import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Home'
import ListBeers from './ListBeers'
import NewBeer from './NewBeer'
import RandomBeer from './RandomBeer'


const Routes = () => {
    return(
        <>
        <Switch>
            <Route path ="/" exact render ={() => <Home />} />
            <Route path ="/beers" render ={() => <ListBeers />} />
            <Route path ="/new-beer" render ={() => <NewBeer />} />
            <Route path ="/random-beer"  render ={() => <RandomBeer />} />
            <Route path ="/:id"  render ={props => <RandomBeer {...props}/>} />
        </Switch>
        </>
    )
}

export default Routes