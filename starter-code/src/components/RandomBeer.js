import React, { Component } from 'react'
import Header from './Header';

export default class RandomBeer extends Component {
    render() {
        return (
            <div>
            <Header/>
            <div>
                <img src="./images/random-beer.png" alt="randombild"></img>
            </div>
            </div>
        )
    }
}
