import React, { Component } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

export default class Beers extends Component {
    state = {
        beers: [],
        APIurl: "https://ih-beers-api2.herokuapp.com/beers"
    }

    componentDidMount() {
        axios.get(this.state.APIurl)
        .then(APIRes => {
            this.setState({beers: APIRes.data})
        })
        .catch(APIErr=>console.log(APIErr))
    }



    render() {


        return (
            this.state.beers.length ?
            <div>
                <h1>All Beers</h1>
                <div id="beer-container">
                    {this.state.beers.map(beer => (
                        <Link to={`/beer/${beer._id}`}>
                        <div className="beer-item">
                            <img src={beer.image_url}/>
                            <h3>{beer.name}</h3>
                            <h5>{beer.tagline}</h5>
                            <p>Created by: {beer.contributed_by}</p>
                        </div>
                        </Link>
                    ))}
                </div>
            </div> 
            :
            <p>Page Loading</p>
        )
        
    }
}
