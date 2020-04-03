import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Navbar from './nav';

class Beers extends Component {
    constructor() {
        super()

        this.state = {
            beers: []     
        }
    }

    componentDidMount() {
        debugger
        axios.get("https://ih-beers-api.herokuapp.com/beers")
        .then(response => {
            // console.log(response)
            this.setState({beers: response.data})
        })
        .catch((error)=> {
            console.log(error);
        });
    }

    render() {
        debugger
        return (    
            <div className="list">
                <Navbar />
                <h1>beers</h1>
                {this.state.beers.map((beer) => {
                    return (
                        <div className= "beer-can" key={beer._id}>
                            <img src={beer.image_url} alt=""/>
                            <h2 >
                                <Link to={`/beer-detail/${beer._id}` }>{beer.name}</Link>
                            </h2> 
                            <h5>{beer.tagline}</h5>
                            <p>Created by: {beer.contributed_by}</p>
                        </div>
                    )
                                      
                })}
            </div>
        )
    }
}

export default Beers;

