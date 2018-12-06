import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./BeerId.css"

export default class BeersId extends Component {
    constructor() {
        super();
        this.state = {
            beer: null
        }
    }
    getSingleBeer = () => {
        const params = this.props.match.params;
        axios.get(`https://ironbeer-api.herokuapp.com/beers/single/${params._id}`)
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
                        <img src={this.state.beer.image_url}></img>
                        <div className="BeerDetail">
                            <div>{this.state.beer.name}</div>
                            <div>{this.state.beer.tagline}</div>
                            <div>{this.state.beer.first_brewed}</div>
                            <div>{this.state.beer.attenuation_level}</div>
                            <div>{this.state.beer.description}</div>
                            <div>{this.state.beer.contributed_by}</div>
                        </div>
                    </div>
                </div>
            </div>
        ) : <div>Loading ...</div>;
    }
}