import React, { Component } from 'react';
import { Link, Route } from "react-router-dom";
import AllBeers from './AllBeers';


class Home extends Component {

    render() {
        return (
            <div>
                <Link className='link' to='/beers'>All Beers</Link>
                <Route exact path='/beers' component={AllBeers} />
            </div>
        )
    }
}

export default Home;