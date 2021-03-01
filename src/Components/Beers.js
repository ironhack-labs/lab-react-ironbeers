import React, { Component } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";

export default class Beers extends Component {
    
    state = {
        beers: []
    }

    componentDidMount() {
        axios.get('https://ih-beers-api2.herokuapp.com/beers')
            .then(response => {
                console.log(response.data);
                this.setState({
                    beers: response.data
                })
            })
            .catch(err => {
                console.log(err);
            })
    }
    
    render() {
        if (this.state.beers.length === 0) return <h3>Loading...</h3>

        return (
            <div> 
                <h1>Beers Overview</h1>
                {this.state.beers.map(beer => {
                  return (
                    <div key = {beer._id}>     
                        <img style={{width: '50px'}} src={beer.image_url} alt="Image"/>   
                        <h2>{beer.name}</h2>
                        <p>{beer.contributed_by}</p>
                            <Link to={`/beers/${beer._id}`}>
                                    <h2>Details</h2>
                            </Link>
                    </div>
                    )
                })
                }
            </div>
        )
    }
}

 