import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class NewBeer extends Component {
    render() {
        return (
            <>
            <header>
                <Link to='/'>
                    <img src='/home-icon.png' alt='home-icon' width='8%'/>
                </Link>
            </header>
            <div>
                <h1>New Beer!</h1>
            </div>
            </>
        )
    }
}
