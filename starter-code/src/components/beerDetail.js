import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class BeerDetail extends Component {
    render() {
        let beerPath = "/beers/" + this.props._id;
        return (
            <Link to={beerPath} >
                <div className='oneBeerDetail'>
                    <img src={this.props.image_url} alt='oneBeerPic' />
                    <div>
                        <h2>{this.props.name}</h2>
                        <p>{this.props.tagline}</p>
                        <span><b>Created by:</b> {this.props.contributed_by}</span>
                    </div>
                </div>
            </Link>
        )
    }
}
