import React from 'react'

export default class SingleBeerView extends React.Component {
    render() {
        return (
            <div className="beer-SingleView">
                <img className="img-beer" src={this.props.image_url} />
                <div className="beer-title">
                    <h2>{this.props.name}</h2>
                    <h2>{this.props.attenuation_level}</h2>
                </div>
                <div className="beer-title">
                    <h2>{this.props.tagline}</h2>
                    <h2>{this.props.first_brewed}</h2>
                </div>
                <p>{this.props.description}</p>
                <h6>{this.props.contributed_by}</h6>
            </div>
        )
    }
}