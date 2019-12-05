import React, { Component } from 'react'
import Nav from '../Nav/Nav'
import { buildMatchMemberExpression } from '@babel/types'
import { Link } from 'react-router-dom'
export default class Beers extends Component {
    constructor(){
        super()
        this.state={
            chosenBeer: ""
        }
    }


    render() {
        return (
            <div class="page">
                <h1>BEERS</h1>
                <Nav></Nav>
                {this.props.beers.map((beer) => (
                    <div key={beer._id} className="beer-preview">
                        <div><Link onClick={()=>this.props.sendBeerToDetail(beer)} to={beer._id}><img src={beer.image_url} alt="beer-image" className="src" /></Link>
                        </div>
                        <div>
                            <h2>{beer.name}</h2>
                            <h4>{beer.tagline}</h4>
                            <p>{beer.contributed_by}</p>
                        </div>
                    </div>
                ))}
            </div>
        )
    }
}
