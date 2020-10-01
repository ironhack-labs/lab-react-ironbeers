import React, { Component } from 'react'


class BeerDetailCard extends Component {
    constructor() {
        super()
        this.state = { }
    }

    render() {
        
        return (
            <>
                <img className="img-details" src={this.props.data.image_url} alt={this.props.data.name} />
                <h3>{this.props.data.name}</h3>
                <h4 className="text-muted">{this.props.data.tagline}</h4>
                <p>{this.props.data.first_brewed}</p>
                <p>{this.props.data.attenuation_level}</p>
                <p>{this.props.data.description}</p>
                <p>{this.props.data.contributed_by}</p>
            </>
        )
    }
}
export default BeerDetailCard