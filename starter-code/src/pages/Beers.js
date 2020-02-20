import React, { Component } from 'react'
import {getAllBeers} from '../services/Beers'

export default class Beers extends Component {
    state={
        beers:[]
    }
    async componentDidMount(){
        const data= await getAllBeers()
        this.setState({beers:[...data]})
    }
    render() {
        return (
            <div>
                {this.state.beers.map((beer,i)=><div key={i}>
                <img src={beer.image_url} alt={beer.name} />
                <h2>{beer.name}</h2>
                <p>{beer.tagline}</p>
                <small>Created by: {beer.contributed_by}</small>
                </div>)}
            </div>
        )
    }
}
