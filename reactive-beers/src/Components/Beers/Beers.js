import React, { Component } from 'react';

import axios from 'axios';
// import { Link } from 'react-router-dom';


class Beers extends Component {
    constructor() {
        super()
        this.state = {
            listOfBeers: null
        }
    }
    getAllBeers = () => {
        axios.get('https://ironbeer-api.herokuapp.com/beers/all')
            .then(responseFromApi => {
                console.log(responseFromApi.data)
                this.setState({
                    listOfBeers: responseFromApi.data
                })
            })
    }
    componentDidMount() {
        this.getAllBeers();
    }
    render() {

        return this.state.listOfBeers ?
            (<div>
                <div style={{ width: '60%', float: "left" }}>
                    {this.state.listOfBeers.map((beer, index) => {
                        return (
                            <div>
                                <img src={beer.image_url} />
                                <h1>{beer.name}</h1>
                                <h2>{beer.tagline}</h2>
                                <p>Created by: {beer.name}</p>
                            </div>
                        )
                    })
                    }
                </div>
            </div>)
            :
            (
                <p>Loading...</p>
            )

    }
}

export default Beers;