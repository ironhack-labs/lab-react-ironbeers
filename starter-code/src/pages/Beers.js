import React, { Component } from 'react'
import {getAllBeers} from '../services/Beers'
import {Link} from 'react-router-dom'
import Header from '../components/Header'

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
            <>
            <Header />
            <div>
                {this.state.beers.map((beer,i)=><div className="cardBeers" key={i}>
                <img src={beer.image_url} alt={beer.name} />
                <h2>{beer.name}</h2>
                <p>{beer.tagline}</p>
                <small>Created by: {beer.contributed_by}</small>
                <Link to={`/beers/${beer._id}`}>Detalle </Link> 
                </div>)}
            </div>
            </>
        )
    }
}
