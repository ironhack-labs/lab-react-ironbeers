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
                <div>
                <h2>{beer.name}</h2>
                <p className="gray">{beer.tagline}</p>
                <small><span>Created by: </span>{beer.contributed_by}</small>
                <br></br>
                <br></br>
                <Link to={`/beers/${beer._id}`}>View detail </Link>
                </div> 
                </div>)}
            </div>
            </>
        )
    }
}
