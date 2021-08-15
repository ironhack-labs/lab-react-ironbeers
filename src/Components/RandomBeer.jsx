import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import axios from "axios";
import Header from "./Header";
import "../Style/BeerDetails.css"
class RandomBeer extends Component {
    state = {
        beer: null,
    };

    componentDidMount() {
        axios
            .get("https://ih-beers-api2.herokuapp.com/beers/random")
            .then((response) => {

                this.setState({
                    beer: response.data,
                });
            })
            .catch((error) => {
                console.log(error);
            });
    }

    render() {
        if (this.state.beer === null) {
            return <div>Loading ...</div>;
        }

        return (
            <div>
                 <Header/>
                 <div className="oneBeer">
                <img src={this.state.beer.image_url} className="oneBeerImg" />
                <p className="name">{this.state.beer.name}</p>
                <p>{this.state.beer.tagline}</p>
                <p>{this.state.beer.first_brewed}</p>
                <p className="description">{this.state.beer.description}</p>
                <p>{this.state.beer.contributed_by}</p>
                </div>
            </div>
        );
    }
}


export default RandomBeer;