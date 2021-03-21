
import React, { Component } from 'react'
import Header from './Header';
import axios from "axios";
import { Link } from "react-router-dom";

// HERE I WILL DISPLAY ALL THE BEERS

export class AllBeers extends Component {

    state = {
        beers: null,
    };



    componentDidMount() {
        axios
            .get("https://ih-beers-api2.herokuapp.com/beers")
            .then((response) => {
                // console.log(response);
                // With axios, your response data will always be at
                // response.data
                console.log(response);
                this.setState({ beers: response.data });

                // console.log(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }


    handleChange = (event) => {
        event.preventDefault();
        let query = event.target.value;
        console.log(event.target.value);
        axios
            .get(`https://ih-beers-api2.herokuapp.com/beers/search?q=${query}`)
            .then((response) => {
                console.log(response);
                this.setState({ beers: response.data });
                
            })
            .catch((error) => {
                console.log(error);
            });
    };

    render() {

        if (this.state.beers === null) {
            return <div>Loading....</div>;
        }

        return (

            <div>
                <Header />
                <h1>ALL THE BEERS :D</h1>
                <p>Search
                    <input type="text" onChange={this.handleChange} placeholder="search beers" name="query" />
                </p>
                <div>
                    {this.state.beers.map((beer) => {
                        return (
                            <div>
                                <img src={beer.image_url} className="beers" alt="beer-image" />
                                <p>
                                    <h4>{beer.name}</h4> <br />
                                    {beer.tagline} <br />
                                Contributed by {beer.contributed_by} <br />

                                    <Link to={`/beers/${beer._id}`}>See details</Link>

                                </p>
                            </div>)
                    })}

                </div>
            </div>
        )
    }
}

export default AllBeers
