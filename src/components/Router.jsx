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
        randomData: null,
        loading: true,
        loadingRandom: true
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
        .catch((e) => console.log(e))
    }

    getRandomData(){
        axios.get(`https://ih-beers-api2.herokuapp.com/beers/random`)
        .then(res => {
            const gottenData = res.data
            this.setState({
                randomData: gottenData,
                loadingRandom: false
                } 
            )
        })  
        .catch((e) => console.log(e))
    }

    componentDidMount() {
        this.getData() 
        this.getRandomData()
      }
 
    shouldComponentUpdate(){ 
        
        return false
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
                <Route exact path='/random' render={(props) => (
                        <RandomBeer props={props} data={this.state.randomData} loading={this.state.loadingRandom} getData={this.getRandomData()}/>
                    )}/>
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