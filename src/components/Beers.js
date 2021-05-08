import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import Navbar from './Navbar'
import axios from 'axios';

export default class Beers extends Component {

    state = {
        beers: []
    }

    componentDidMount() {
       axios.get('https://ih-beers-api2.herokuapp.com/beers')
       .then(response => { 
            this.setState({
                beers : response.data
            })}
        )
    }
    
    render() {
        return (
            <>
            <Navbar />
            <div>
                {this.state.beers.map(beer => {
                return(
                    <div key={beer._id} className="overview">
                        <img src={beer.image_url} alt={beer.name}/>
                        <Link to={`/beers/${beer._id}`}>
                            <h2>{beer.name}</h2>
                        </Link>
                        <h3>{beer.tagline}</h3>
                        <p>Created by: {beer.contributed_by}</p>
                    </div>
                )
                })}
            </div>
            </>
        )
    }
}
