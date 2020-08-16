import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'

import Navbar from './Navbar';

class BeersList extends Component {
    constructor(props) {
        super(props);
        this.state = { listOfBeers: [] };
    }

    getAllBeers = () => {
        axios.get(`https://ih-beers-api2.herokuapp.com/beers`).then( responseFromApi => {
            this.setState({
                listOfBeers: responseFromApi.data
            });
        });
    }

    componentDidMount() {
        this.getAllBeers();
    }
    
    render() {
        return (
            <div>
                <Navbar />
                {this.state.listOfBeers.map(beer => {
                        return(
                            <div key={beer._id}>
                                <div>
                                    <Link to={`/beers/${beer._id}`}><img src={beer.image_url} /></Link>
                                </div>
                                <div>
                                    <Link to={`/beers/${beer._id}`}>
                                        <h3>{beer.name}</h3>
                                    </Link>
                                    <p>{beer.tagline}</p>
                                    <p><b>Created by: </b>{beer.contributed_by}</p>
                                </div>
                                
                                
                            </div>
                        )
                    })}
            </div>
        )
    }
}

export default BeersList