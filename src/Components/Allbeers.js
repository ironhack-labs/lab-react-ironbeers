import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
const API = 'https://ih-beers-api2.herokuapp.com/beers'


export default class Allbeers extends Component {
    constructor (props) {
        super(props);
        this.state = {
            beers: []
        }
    }

    componentDidMount () {
        axios.get(API)
        .then(res => 
            this.setState({
                beers: res.data
            }))
            .catch(err => console.log(err))
    }

    render() {
        

const allbeers = this.state.beers.map(beer => {
    return (
        <div key={beer._id}>
            <Link to={`/beerdetails/${beer._id}`}>
        
                <img src={beer.image_url} style={{height:'100px'}}/>
                <h2>{beer.name}</h2>
                <h4>{beer.tagline}</h4>
                <h6>{beer.contributed_by}</h6>
        
            </Link>∏
        </div>
    )
}

)

        return (
            <div>
                <h1>All beers</h1>
                {allbeers}
            </div>
        )
    }
}
