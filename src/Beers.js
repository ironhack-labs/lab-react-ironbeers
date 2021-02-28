import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class Beers extends Component {

    state = {
        beers: [],
    }

    componentDidMount() {
        axios.get('https://ih-beers-api2.herokuapp.com/beers/')
        .then(response => {
            console.log(response);
            this.setState({
                beers: response.data
            })
        })
        .catch(err => {
            console.log(err);
        })
    }
    
    render() {
        return (
            <div>
            { this.state.beers.map(beer => {
                return ( 
                    <article key={beer._id}>
                    <div>
                    <img src={ beer.image_url } alt="beer" />
                    </div>

                    <div>
                    <Link to={`/beers/${beer._id}`}>
                    <h3>{beer.name}</h3>
                    </Link>
                    <h4>{beer.tagline}</h4>
                    <p>Created by: {beer.contributed_by}</p>
                    </div>
                    </article>
                )
            })}
            </div>
        )
    }
}