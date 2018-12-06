import React, { Component } from 'react';
import { Link } from "react-router-dom";
import axios from "axios";
import "./BeerRandomPage.css"


export default class BeerRandomPage extends Component {
    constructor() {
        super();
        this.state = {
            beer: null
        }
    }
    getSingleBeer = () => {
        axios.get(`https://ironbeer-api.herokuapp.com/beers/random`)
            .then(beer => {
                this.setState({ ...this.state, beer: beer.data })
            })
            .catch(error => console.log(error));
    };
    componentDidMount() {
        this.getSingleBeer();
    }
    render() {
        return (this.state.beer) ? (
            <div>
                <div className="nav"><Link to={`/`}>Go to Home Page</Link></div>
                <div className="body">
                    <div className="BeerCard">
                        <img src={this.state.beer[0].image_url}></img>
                        <div className="BeerDetail">
                            <div>{this.state.beer[0].name}</div>
                            <div>{this.state.beer[0].tagline}</div>
                            <div>{this.state.beer[0].first_brewed}</div>
                            <div>{this.state.beer[0].attenuation_level}</div>
                            <div>{this.state.beer[0].description}</div>
                            <div>{this.state.beer[0].contributed_by}</div>
                        </div>
                    </div>
                </div>
            </div>
        ) : <div>Loading ...</div>;
    }
}