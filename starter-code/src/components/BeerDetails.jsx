import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";


export default class BeerDetails extends React.Component {
    render() {
        return (
            <div>
                <Navbar></Navbar> 
                <div className="beer-details">
                    <img src={this.props.beer.image_url} alt="beer img"/>
                    <div className="header-info">
                        <div className="header-info-left">
                            <h2>{this.props.beer.name}</h2>
                            <h4>{this.props.beer.tagline}</h4>
                        </div>
                        <div className="header-info-right">
                            <h2>{this.props.beer.attenuation_level}</h2>
                            <h4>{this.props.beer.first_brewed}</h4>
                        </div>
                    </div>
                    <div className="beer-desc">
                        <p>{this.props.beer.description}</p>
                        <p>Submitted by: {this.props.beer.contributed_by}</p>
                    </div>
                </div>
            </div>
        )
    }   
}