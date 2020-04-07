import React, { Component } from 'react'
import AllBeersCard from '../components/AllBeersCard';
import RandomBeerCard from '../layout/RandomBeerCard';
import NewBeerCard from '../components/NewBeerCard';

// import {Route, Switch} from 'react-router-dom';

class Homepage extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        return (
            <div>
                <AllBeersCard/>
                <RandomBeerCard/>
                <NewBeerCard/>
                {/* <Switch>
                    <Route path="/all-beers" component={AllBeers}/>
                    <Route path="/random-beer" component={RandomBeer}/>
                    <Route path="/new-beer" component={NewBeer}/>
                </Switch> */}
            </div>
        )
    }
}

export default Homepage
