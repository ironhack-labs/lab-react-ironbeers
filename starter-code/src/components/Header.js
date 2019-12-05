import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class Header extends Component {
    render() {
        return (
            <header className = 'headerbar'>
                <Link to='/'>
                    <img src = '/images/home.svg' alt = ''/>
                </Link>
            </header>
        )
    }
}
