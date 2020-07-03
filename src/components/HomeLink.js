import React, { Component } from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import Home from './Home'
import AllBeers from './AllBeers'
import RandBeer from './RandBeer'
import AddBeer from './AddBeer'


const HomeLink =()=> {
        return (
            <div>
                <Link to='/'>Home</Link>
                {/* <Link to='/allBeer'>AllBeers</Link>
                <Link to='/addBeer'>RandBeers</Link> */}
                {/* <Switch>
                    <Route exact path='/home' render={<Home />}/>     
                    <Route exact path='/allBeer' render={<AllBeers />}/>     
                    <Route exact path='/randBeer' render={<RandBeer />}/>     
                    <Route exact path='/addBeer' render={<AddBeer />}/>     
                </Switch> */}
            </div>
        );
}

export default HomeLink;