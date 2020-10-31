import Axios from 'axios'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

const BEERS_FROM_DB = 'https://ih-beers-api2.herokuapp.com/beers'

export default class AllBeers extends Component {

    state = {
        beers: ''
    }

    componentDidMount () {
        Axios 
        .get(BEERS_FROM_DB)
        .then(response => {
            console.log(response)
            this.setState({ beers: response.data })
        })
    }
    
    render() {
        if(this.state.beers.length < 1) {
            return <h1>Loading</h1>
        }

        return (
            <div>
                {this.state.beers.map(beer => 
                    <Link to={`/beer/beers/${beer._id}`} key={beer._id} style={{ textDecoration: 'none' }}>
                        <img src={beer.image_url} alt=''></img>
                        <h2>{beer.name}</h2>
                        <h3>{beer.tagline}</h3>
                        <h4>Created by: {beer.contributed_by}</h4>
                        <hr></hr>
                    </Link>
                )}
            </div>
        )
    }
}

