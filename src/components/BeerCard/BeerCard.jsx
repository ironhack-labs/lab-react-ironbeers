import React from 'react';
import { Link } from 'react-router-dom';
import './BeerCard.css';

export default class BeerCard extends React.Component {
    render() {
        return (
            <Link to={"beers/" + this.props._id}>
                <div className="beer-card">
                <img className="img-beer-card" src={this.props.image_url} />
                <div className="info-beer">
                    <h4>{this.props.name}</h4>
                    <p>{this.props.tagline}</p>
                    <h6>Created by: {this.props.contributed_by}</h6>
                </div>
                </div>
            </Link>
        )
    }
}