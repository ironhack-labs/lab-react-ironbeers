import React, { Component } from 'react'
import Header from './Header';

export default class NewBeer extends Component {
    render() {
        return (
            <div>
            <Header/>
            <div>
                <img src="./images/new-beer.png" alt="newbeerbild"></img>
            </div>
            </div>
        )
    }
}
