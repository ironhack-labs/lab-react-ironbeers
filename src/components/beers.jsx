import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Header from './Header';

class Beers extends Component {
    state = {
        beers: []
    }

    componentDidMount() {
        axios.get('https://ih-beers-api2.herokuapp.com/beers')
            .then(response => {
                this.setState({
                    beers: response.data
                })
            })
    }

    render() {
        return (
            <div>
                <Header/>
                {this.state.beers.map(beer => {
                    return (
                        <Link to={`/beer-details/${beer._id}`}>
                            <div className='Beers'>
                                <img id='imgbeer' src={beer.image_url} alt={beer.name} />
                                <div className='BeersText'>
                                <h2>{beer.name}</h2>
                                <h3>{beer.tagline}</h3>
                                <p>Created by: {beer.contributed_by}</p>
                                </div>
                            </div>
                            <hr />
                        </Link>
                    )
                })}
            </div>
        )
    }
}

export default Beers;
