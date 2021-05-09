import React, { Component } from 'react';
import axios from 'axios';
import './AllBeers.css';
import Header from './Header';

class AllBeers extends Component {
    constructor(){
        super();

        this.state = {
            beers: [],
        }
    }

    componentDidMount() {
        axios.get("https://ih-beers-api2.herokuapp.com/beers")
        .then(response => {
            this.setState({beers: response.data})
        })
    }

    render(){
        return(
            <div>
                <Header />
                <div>
                    {this.state.beers.map((item) => {
                        return(
                            <div>
                                <img className="all-beers-image" src={item.image_url}/>
                                <p>{item.name}</p>
                                <p>{item.tagline}</p>
                                <p>{item.contributed_by}</p>
                                <a href={`/beers/${item._id}`}>Details</a>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default AllBeers;

