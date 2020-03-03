import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class AllBeers extends Component {
    state = {
        beerList: []
    };

    componentDidMount() {
        axios.get("https://ih-beers-api2.herokuapp.com/beers")
        .then(response => {
            this.setState({
                beerList: response.data
            });
        });
    }

    render() {
        return (
            <div className="container">
                {this.state.beerList.map(beer) => {
                    return (
                        <div>

                        </div>
                    )
                }}            
            </div>
        )
    }
}