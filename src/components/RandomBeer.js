import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class RandomBeer extends Component {
    render() {
        return (
            <>
            <header>
                <Link to='/'>
                    <img src='/home-icon.png' alt='home-icon' width='8%'/>
                </Link>
            </header>
            <div>
                <h1>Random Beer!</h1>
            </div>
            </>
        )
    }
}
