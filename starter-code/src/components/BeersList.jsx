import React from "react";
import { Link } from "react-router-dom";
import BeerOverview from "./BeerOverview";
import Navbar from "./Navbar";


export default class BeersList extends React.Component {
    render() {
        return (
            <div>
            <Navbar></Navbar>
            <div className="beers-list">
                {this.props.beers.map(beer => (
                    <BeerOverview img={beer.image_url} name={beer.name} tagline={beer.tagline} contributedBy={beer.contributed_by} id={beer._id} onBeerClick={this.props.onBeerClick}></BeerOverview>
                ))}
            </div>
            </div>
        )
    }   
}