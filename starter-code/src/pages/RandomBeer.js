import React, { Component } from 'react'
import {randomBeer} from "../services/beerList"

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
            <div>
                {this.state.beerId} />
            </div>
            </>
        )
    }
}