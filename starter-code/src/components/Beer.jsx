import React, { Component } from 'react';

import axios from 'axios';
import { Link } from 'react-router-dom';

class Beer extends Component {

    constructor(){
        super()
        this.state = {
            beers: []
        }
    }

    componentDidMount() {
        axios.get("https://ih-beers-api2.herokuapp.com/beers")
        .then(response => {
            this.setState({beers: response.data})
            console.log(response.data)
        })
    
    }
    render() {
        return (
            <div>
                {this.state.beers.map(beer => {
                    return (
                        <div>
                            <img className = 'beer-image' src={beer.image_url}/> 
                            <Link to='/:_id'><p><h4>{beer.name}</h4></p></Link>
                            <span>{beer.tagline}</span>
                            <p>Contributed by:{beer.contributed_by}</p>
                        </div>
                    )
                })}
            </div>

        )
    }
} 

export default Beer;