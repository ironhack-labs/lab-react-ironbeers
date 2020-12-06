import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import Header from './Header'
export default class Home extends Component {
    render() {
        return (
            <div>
                <Header />
                <Link to = "/beers">Beers</Link>
                <Link to = "/random-beer">Random Beer</Link>
                <Link to = "/new-beer">New Beer</Link>
            </div>
        )
    }
}
