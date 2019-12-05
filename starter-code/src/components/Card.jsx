import React, { Component } from 'react'
import NavBar from './NavBar'

export default class Card extends Component {
    render() {
        return (
            <div>
                <NavBar></NavBar>
                <h1>{this.props.beerID}</h1>
            </div>
        )
    }
}
