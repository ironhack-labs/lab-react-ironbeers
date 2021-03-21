import React, { Component } from 'react';
import Header from '../Components/Header';
import axios from 'axios';
import { Link } from "react-router-dom";

export class Beers extends Component {
    state = {
        beers: []
    }

    componentDidMount() {
        axios
        .get("https://ih-beers-api2.herokuapp.com/beers")
            .then((response) => {
                this.setState({ beers: response.data });
            })
            .catch((error) => {
                console.log(error);
            });
    }
    render() {
        return (
            <div>
                <Header />
                <h1>Our Beers</h1>
                {this.state.beers.map((beer) => (
                    <div key={beer._id}>
                        <img src={beer.image_url} alt="" />
                        <h2>{beer.name}</h2>
                        <i><p>{beer.tagline}</p></i>
                        <p>{beer.contributed_by}</p>
                        <Link to={`/beers/${beer._id}`}>See details !</Link>
                    </div>
                ))}
            </div>
        )
    }
}

export default Beers;