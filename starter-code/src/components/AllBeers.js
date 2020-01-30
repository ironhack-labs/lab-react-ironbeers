import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class AllBeers extends Component {
    constructor() {
        console.log("AllBeers, constructor()");
        super();
        this.state = {
            beers: []
        };
    }


    componentDidMount() {
        console.log("AllBeers, componentDidMount()")
        axios.get('https://ih-beers-api2.herokuapp.com/beers')
            .then(res => {
                console.log(res.data);
                this.setState({ beers: res.data });
            })
            .catch(err => console.log(err));
    };

    render() {
        console.log("AllBeers, render()");
        return (
            <div>
                <h1> Beers List </h1>
                {
                    this.state.beers.map(beer => {
                        return (
                            <div key={beer._id}>
                                <Link to={`/beers/${beer._id}`}>
                                    <img src={beer.image_url} alt="" />
                                </Link>
                                <h3>{beer.name}</h3>
                                <p>{beer.tagline}</p>
                                <p>Created By: {beer.contributed_by}</p>
                            </div>
                        )
                    })
                }
            </div>
        );
    }
}

export default AllBeers;
