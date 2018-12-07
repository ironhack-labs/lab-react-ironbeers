import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class Beer extends Component {
    render() {
        return (
            <div id="beer">
                <div id="img-beer">
                    <img src={this.props.image_url} alt="beerImage" />
                </div>
                <div id="info-beer">
                    <h1>{this.props.name}</h1>
                    <h2>{this.props.tagline}</h2>
                    <p>Created_by: {this.props.contributed_by}</p>
                    <Link to={`/beers/single/` + this.props._id} style={{ textDecoration: 'none' }}>More details</Link>
                </div>
            </div>
        )
    }
}
