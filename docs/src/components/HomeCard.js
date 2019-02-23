import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class HomeCard extends Component {

    render() {
        return (
                <div className="card">
                    <img className="card-img-top" src={this.props.image} alt="Card"/>
                    <div className="card-body">
                        <h5 className="card-title">{this.props.title}</h5>
                        <p className="card-text">{this.props.description}</p>
                        <Link to={this.props.link} className="btn btn-primary">Let's go!</Link>
                    </div>
                </div>
            )
    }
}

export default HomeCard;