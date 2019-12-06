import React, { Component } from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

export default class Card extends Component {
    render() {
        return (

            <React.Fragment>

                <div className="card-container">
                    <div className="container-left">
                        <img className="card-image" src={this.props.payLoad.image_url} alt={this.props.payLoad.name} />
                    </div>
                    <div className="container-right">
                        <Link to={"/" + this.props.payLoad._id}><h2>{this.props.payLoad.name}</h2></Link>
                        <h3>{this.props.payLoad.tagline}</h3>
                        <p><strong>Created by:</strong>{this.props.payLoad.contributed_by}</p>
                    </div>
                </div>

            </React.Fragment>
        )
    }
}
