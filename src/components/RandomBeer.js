import React, { Component } from 'react'

import Navbar from './Navbar'

export default class RandomBeer extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <h1>Random Beer</h1>
            </div>
        )
    }
}
