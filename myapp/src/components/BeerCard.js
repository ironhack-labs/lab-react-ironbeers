import React, { Component } from 'react';

export default class BeerCard extends Component {
    render() {
        let { image_url, name, tagline, contributed_by } = this.props;
        return (
            <div className="d-flex flex-row border-bottom my-2 justify-content-center container py-2">
                <img src={image_url} alt={name} className="beer-img mx-3"></img>
                <div className="col-6 d-flex flex-column align-items-start justify-content-center">
                    <h1 className="text-start">{name}</h1>
                    <h2 className="text-start">{tagline}</h2>
                    <p>Contributed by: {contributed_by}</p>
                </div>
            </div>
        )
    }
}