import React, { Component } from 'react'
import Header from '../components/Header'
import BeerDetail from '../components/BeerDetail'
import {randomBeer} from "../services/Beers"

export default class Beer extends Component {
    state={
        beerId:null
    }
    async componentDidMount(){
        const data= await randomBeer()
        this.setState({beerId:data._id})
    }
    render() {
        return (
            <>
            <Header />
            <div>
                {this.state.beerId && <BeerDetail beerId={this.state.beerId} />}
            </div>
            </>
        )
    }
}