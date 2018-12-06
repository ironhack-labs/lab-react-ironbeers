import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Beer.css"

export default class Beer extends Component {
    render() {

        return (
            <div className="Beer">
                <div className="BeerCard">
                    <div className="Beerimage">
                        <Link to={`/beers/${this.props.beer._id}`}> <img src={this.props.beer.image_url} /></Link>
                    </div>
                    <div className="Beerdetail">
                        <div>
                            <Link to={`/beers/${this.props.beer._id}`}>{this.props.beer.name}</Link>
                        </div>
                        <div>
                            {this.props.beer.tagline}
                        </div>
                        <div>
                            <strong>Created by: </strong>
                            {this.props.beer.contributed_by.split(" ")[0]}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}