import React, { Component } from 'react'

export default class EachBeer extends Component {




    render() {
        return (
            <div className="eachBeer">
                <div>
                    <img className="justbeer" src={this.props.data.image_url}/>
                </div>
                <div>
                    <h1>{this.props.data.name}</h1>
                    <h2>{this.props.data.tagline}</h2>
                    <p><strong>Created by:</strong> {this.props.data.contributed_by}</p>
                </div>
            </div>
        )
    }
}
