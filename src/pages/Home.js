import React, { Component } from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import ListBeers from './ListBeers';
import RandomBeer from './RandomBeer';
import NewBeer from './NewBeer';



class Home extends Component {
    render() {
        return (
            <div>
            <Link to='/list-beers'> <h1>All beers</h1> </Link>
            <Link to='/new-beer'> <h1>New beers</h1></Link>
            <Link to='/random-beer'> <h1>Random beers</h1></Link>

            <Switch>
               <Route exact path="/list-beers" component={ListBeers} />
               <Route exact path="/new-beer" component={NewBeer} />
               <Route exact path="/random-beer" component={RandomBeer} />
            </Switch>
              
            </div>
        )
    }
}

export default Home
