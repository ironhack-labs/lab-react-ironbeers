import React, { Component } from 'react'

export default class EachBeer extends Component {
    render() {
        return (
            <div className="each-Beer">
                <div>
                    <img className="one-beer" src={this.props.data.image_url}/>
                </div>
                <div>
                    <h2>{this.props.data.name}</h2>
                    <h3>{this.props.data.tagline}</h3>
                    <p><strong>Created by:</strong> {this.props.data.contributed_by}</p>
                </div>
            </div>
        )
    }
}

