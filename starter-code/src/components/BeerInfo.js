import React, { Component } from 'react';

class BeerInfo extends Component {
    render(){
        return(
            <div>
                <img src={this.props.image_url} />
                <h1>{this.props.name}</h1>
                <p>{this.props.tagline}</p>
                <p>{this.props.description}</p>
                <p>{this.props.contributed_by}</p>
            </div>
        )
    }
}

export default BeerInfo;