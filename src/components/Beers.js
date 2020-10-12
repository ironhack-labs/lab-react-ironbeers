import React, { Component } from 'react';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
const axios = require('axios');

export default class Beers extends Component {
    state = {
        beers: [],
        search: ""
    }

    componentDidMount = () => {

        axios
            .get("https://ih-beers-api2.herokuapp.com/beers")
            .then(beersFromAPI => {
                console.log(beersFromAPI.data);
                this.setState({
                    beers: beersFromAPI.data
                });
            })
            .catch(err => console.log(err));

    }

    handleSearch = async (event) => {
        const {value} = event.target;

        await this.setState({
            search: value.toLowerCase()
        });

        axios
            .get(`https://ih-beers-api2.herokuapp.com/beers/search?q=${this.state.search}`)
            .then(searchFromAPI => {
                console.log({searchResponse: searchFromAPI.data});

                this.setState({
                    beers: searchFromAPI.data
                })
            })
            .catch(err => console.log(err));
    }

    render() {
        return (
            <div>
                <Navbar />
                <input type='text' value={this.state.search} onChange={this.handleSearch} placeholder="search"></input>
                <div>
                    {
                        this.state.beers.map(beer => 
                            <div key={beer._id} className="beer-card">
                                <div>
                                    <img src={beer.image_url} alt={beer.name} />
                                </div>
                                <div className="beer-info">
                                    <h3><Link to={`beers/${beer._id}`}>{beer.name}</Link></h3>
                                    <p>{beer.tagline}</p>
                                    <p>Created by: {beer.contributed_by}</p>
                                </div>
                            </div>
                            
                        )
                    }
                </div>
            </div>
        )
    }
}
