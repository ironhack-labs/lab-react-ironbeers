import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export default class BeerCard extends Component {
    render() {
        let { image_url, name, tagline, contributed_by, _id } = this.props;
        let route = `/beers/${_id}`;
        return (
            <div className="d-flex flex-row border-bottom my-2 justify-content-center container py-2">
                <Link to={route}><img src={image_url} alt={name} className="beer-img mx-3"></img></Link>
                <div className="col-6 d-flex flex-column align-items-start justify-content-center">
                    <h1 className="text-start">{name}</h1>
                    <h2 className="text-start">{tagline}</h2>
                    <p>Contributed by: {contributed_by}</p>
                </div>
            </div>
        )
    }
}