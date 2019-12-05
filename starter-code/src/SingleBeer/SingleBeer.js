import React, { Component } from 'react'
import Nav from '../Nav/Nav'
import { Link } from 'react-router-dom'


export default class SingleBeer extends Component {
    render() {
        return (
            <div>
                <Nav></Nav>
                <div class="section detail">
                    <div><img src={this.props.beer.image_url} alt="" className="src" /></div>
                    <div>
                        <h2>{this.props.beer.name}</h2>
                        <h4>{this.props.beer.tagline}</h4>
                        <p>{this.props.beer.description}</p>
                    </div>
                </div>
            </div>
        )
    }
}
