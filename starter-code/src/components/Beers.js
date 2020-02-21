import React, { Component } from 'react'
import {getAllBeers} from '../services/ihBeers'
import { Link } from 'react-router-dom';





export default class Beers extends Component {
    state={
        beers:[]
    }

async componentDidMount(){
    const beers = await getAllBeers();
    this.setState({beers})
}
  

    render() {
        return (
            <div className="AllBeers">
           
                {this.state.beers && (this.state.beers.map((beer,i)=>(
                 <article>
                     <div>
                         <Link to={`/beers/${beer._id}`}><img alt="beer" src={beer.image_url}></img></Link>
                         </div>
                     <div className="descB">
                         <h1>{beer.name}</h1>
                         <h2>{beer.tagline}</h2>
                         <h3>{beer.contributed_by}</h3>
                     </div>
                 </article>  
                 
                )))}
            </div>
        )
    }
}

