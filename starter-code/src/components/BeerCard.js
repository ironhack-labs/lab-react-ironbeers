import React, { Component } from 'react'
import {Link} from 'react-router-dom'


export default class BeerCard extends Component {
    render() {
        return (
            <Link className='link-card' to={`/beer/${this.props.id}`}>
            <div className='beercard'>
                <div className='beercard-img'>
                    <img src={this.props.img} alt=""/>
                </div>
                <div className='beercard-summary'>
                    <h3>{this.props.name}</h3>
                    <h4>{this.props.tagline}</h4>
                    <h5>Created by: {this.props.contri}</h5>
                </div>
            </div>
            </Link>
        )
    }
}
