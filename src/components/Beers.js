import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import axios from 'axios';

export class Beers extends Component {
    state={
        beers:this.props.arrBeers,
    }

    searchBeer = async (e) =>{
        try {
            const beers = await axios.get(`https://api.punkapi.com/v2/beers?beer_name=${e.target.value}`);
            this.setState({beers: beers.data})
            console.log(beers.data)
        } catch (error) {
            console.log(error)
        }
    }

    render() {
        return (
            <div>
                <input type='text' onChange={this.searchBeer} />
                {this.state.beers&&(this.state.beers.map(beer=>{
                    return (
                        <div>
                        <Link key={beer.id} to={`/beers/${beer.id}`}>
                            <div>
                                <img src={beer.image_url} alt={beer.name}/>
                                <p>{beer.name}</p>
                                <p>{beer.tagline}</p>
                                <p>{beer.contributed_by}</p>
                            </div>
                        </Link>
                        </div>
                    )
                }))}
            </div>
        )
    }
}

export default Beers

