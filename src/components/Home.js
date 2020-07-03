import React, { Component } from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import AllBeers from './AllBeers'
import RandBeer from './RandBeer'
import AddBeer from './AddBeer'





const Home =()=> {
        return (
            <div>
                <Link to='/allBeers'>All Beers</Link>
                <Link to='/randBeer'>Random Beer</Link>
                <Link to='/addBeer'>Add Beer</Link>
                <Switch>
                    <Route path="/allBeer" component={AllBeers} />
                    <Route path="/randBeer" component={RandBeer} />
                    <Route path="/addBeer" component={AddBeer} />
                </Switch>
{/*                 
                <RandBeer />
                <AddBeer />      */}
            </div>
        );
}

export default Home;