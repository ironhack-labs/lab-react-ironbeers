import React, { Component } from 'react'

class BeerDetailCard extends Component {
    constructor() {
        super()
        this.state = {}
    }

    render() {

        return (
            <>
                <img src={this.props.data.image_url} alt={this.props.data.name} />
                <p>{this.props.data.name}</p>
                <p>{this.props.data.tagline}</p>
                <p>{this.props.data.contributed_by}</p>
            </>
        )
    }
}

export default BeerDetailCard