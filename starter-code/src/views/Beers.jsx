import React, { Component } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

export default class Beers extends Component {
    state = {
        beers: [],
        APIurl: "https://ih-beers-api2.herokuapp.com/beers",
        message: "Page loading"
    }

    componentDidMount() {
        axios.get(this.state.APIurl)
        .then(APIRes => {
            this.setState({beers: APIRes.data})
        })
        .catch(APIErr=>console.log(APIErr))
    }

    filterBeers = (e) => {
        axios.get(`${this.state.APIurl}/search?q=${e.target.value}`)
        .then(APIRes => {
            this.setState({beers: APIRes.data})
            this.setState({message: "No result found, sorry..."})
        })
        .catch(APIErr=>console.log(APIErr))
    }

    render() {

        return (
            <div id="all-beers">
            <div className="beers-header">
                <h2>All Beers</h2>
                <input type="text" onChange={this.filterBeers} placeholder="What are you looking for..."></input>
            </div>
            {this.state.beers.length ?
            <div>
                <div id="beers-container">
                    {this.state.beers.map(beer => (
                        <Link to={`/beer/${beer._id}`}>
                        <div className="beer ref-beer">
                            <img className="img-beer" src={beer.image_url}/>
                            <h3 className="ref-beer">{beer.name}</h3>
                            <h5 className="text">{beer.tagline}</h5>
                            <p className="text">Created by: {beer.contributed_by}</p>
                        </div>
                        </Link>
                    ))}
                </div>
            </div> 
            :
            <p>{this.state.message}</p>}
            </div>
        )
        
    }
}
