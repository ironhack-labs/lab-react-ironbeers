import React from "react";
import { Link } from "react-router-dom";


export default class BeerOverview extends React.Component {
    render() {
        return (
            <div className="beer-overview">
                <img src={this.props.img} alt="beer img"/>
                <div className="beer-overview-info">
                    <Link to={`/beers/${this.props.id}`} onClick={() => this.props.onBeerClick(this.props.id)}><h2>{this.props.name}</h2></Link>
                    <h4>{this.props.tagline}</h4>
                    <p>Submitted by: {this.props.contributedBy}</p>
                </div>
            </div>
        )
    }   
}