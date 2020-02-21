import React, { Component } from 'react'
import DetailBeerCard from '../components/DetailBeerCard'
import {getRandomBeer} from "../services/beerService"

export default class Beer extends Component {
    state={
        beerId:null
    }
    async componentDidMount(){
        const data= await getRandomBeer()
        this.setState({beerId:data._id})
    }
    render() {
        return (
            <>
            <div>
                {this.state.beerId && <DetailBeerCard beerId={this.state.beerId} />}
            </div>
            </>
        )
    }
}