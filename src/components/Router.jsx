import { Route, Switch } from "react-router-dom";
import React from 'react'
import Home from "./Home/Home";
import NewBeer from "./NewBeer/NewBeer";
import BeersList from "./BeersList/BeersList";
import RandomBeer from "./RandomBeer/RandomBeer";
import BeerDetail from "./BeerDetail/BeerDetail";
import NotFound from "./NotFound/NotFound";
import {Component} from 'react'
import axios from 'axios'

class Router extends Component {

    state={
        data: null,
        loading: true
    }

    getData(){
        axios.get(`https://ih-beers-api2.herokuapp.com/beers`)
        .then(res => {
            const gottenData = res.data
            this.setState({
                data: gottenData,
                loading: false
                } 
            )
        })
    }
    componentDidMount() {
        this.getData()  
      }

    

    render(){
        return (
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route 
                    exact path='/beers' 
                    render={(props) => (
                        <BeersList props={props} data={this.state.data} loading={this.state.loading}/>
                    )}/>
                <Route exact path='/random' component={RandomBeer}/>
                <Route exact path='/new' component={NewBeer}/>
                <Route  path='/beers/:id' render={(props) => (
                  <BeerDetail props={props} data={this.state.data} loading={this.state.loading} />
                    )}/>
                <Route  component={NotFound}/>
            </Switch>
        )
    }
    
};

export default Router